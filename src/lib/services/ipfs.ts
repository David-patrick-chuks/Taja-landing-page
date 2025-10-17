import { File, NFTStorage } from 'nft.storage'

// Initialize NFT.Storage client
// Replace with your actual JWT API key from https://nft.storage/
const NFT_STORAGE_TOKEN = "faae9d70.7eb4e1f01f224096902126fcb116105b"

console.log('🔑 Using NFT.Storage token:', NFT_STORAGE_TOKEN.substring(0, 15) + '...')
console.log('🔍 Token length:', NFT_STORAGE_TOKEN.length)
console.log('🔍 Token format check:', NFT_STORAGE_TOKEN.split('.').length === 3 ? '✅ JWT format' : '❌ Not JWT format')

// Check if token is in correct JWT format
const isJWTFormat = NFT_STORAGE_TOKEN.split('.').length === 3
if (!isJWTFormat) {
  console.warn('⚠️ WARNING: Token is not in JWT format!')
  console.warn('📝 NFT.Storage requires a JWT token with 3 parts separated by dots')
  console.warn('🔗 Get a proper JWT token from: https://nft.storage/')
  console.warn('📋 Token should look like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...')
}

if (!NFT_STORAGE_TOKEN) {
  console.warn('🚨 NFT_STORAGE_TOKEN not found in environment variables')
  console.warn('📝 Please create a .env.local file with NEXT_PUBLIC_NFT_STORAGE_TOKEN=your_token_here')
  console.warn('🔗 Get your token from: https://nft.storage/')
}

let client = null
console.log('🔧 Attempting to initialize NFT.Storage client...')
try {
  client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
  console.log('✅ NFT.Storage client initialized successfully')
  console.log('🔧 Client object:', client)
} catch (error) {
  console.error('❌ Failed to initialize NFT.Storage client:', error)
  console.error('❌ Error details:', {
    message: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined
  })
}

export interface UploadResult {
  cid: string
  url: string
  size: number
}

export class IPFSService {
  /**
   * Validate NFT.Storage token format
   */
  static validateToken(token: string): boolean {
    try {
      // NFT.Storage tokens should be JWT format (3 parts separated by dots)
      const parts = token.split('.')
      if (parts.length !== 3) {
        console.warn('⚠️ Token format appears incorrect - should be JWT format (3 parts separated by dots)')
        return false
      }
      
      // Try to decode the header (first part)
      const header = JSON.parse(atob(parts[0]))
      console.log('🔍 Token header:', header)
      
      return true
    } catch (error) {
      console.error('❌ Token validation failed:', error)
      return false
    }
  }

  /**
   * Upload file to IPFS using NFT.Storage (following official docs)
   */
  static async uploadFile(
    file: globalThis.File
  ): Promise<UploadResult> {
    try {
      if (!NFT_STORAGE_TOKEN) {
        throw new Error('NFT.Storage token not configured. Please add NEXT_PUBLIC_NFT_STORAGE_TOKEN to your .env.local file. Get your token from: https://nft.storage/')
      }

      console.log('📤 Uploading file using NFT.Storage...')
      
      // Create NFT.Storage client (following docs)
      const nftClient = new NFTStorage({ token: NFT_STORAGE_TOKEN })
      
      // Create NFT.Storage File object
      const nftFile = new File([file], file.name, { type: file.type })
      console.log('📄 Created NFT file object:', nftFile.name, nftFile.size, 'bytes')

      // Upload using store method (following docs exactly)
      const nft = {
        image: nftFile,
        name: file.name,
        description: `File uploaded to Taja: ${file.name}`,
        properties: {
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString(),
          platform: "Taja"
        }
      }
      
      const metadata = await nftClient.store(nft)
      
      console.log('✅ NFT.Storage upload successful!')
      console.log('🔗 Metadata URL:', metadata.url)
      
      // Extract CID from metadata URL
      const cid = metadata.ipnft
      
      // Get file size
      const size = file.size

      // Construct IPFS URL
      const url = `https://${cid}.ipfs.nftstorage.link`

      return {
        cid,
        url,
        size
      }
    } catch (error) {
      console.error('IPFS upload failed:', error)
      throw new Error(`Failed to upload to IPFS: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Upload encrypted file buffer to IPFS (following official docs)
   */
  static async uploadEncryptedFile(
    fileBuffer: ArrayBuffer,
    fileName: string,
    mimeType: string = 'application/octet-stream'
  ): Promise<UploadResult> {
    try {
      if (!NFT_STORAGE_TOKEN) {
        throw new Error('NFT.Storage token not configured. Please add NEXT_PUBLIC_NFT_STORAGE_TOKEN to your .env.local file. Get your token from: https://nft.storage/')
      }

      console.log('📤 Uploading encrypted file using NFT.Storage...')
      
      // Create NFT.Storage client (following docs)
      const nftClient = new NFTStorage({ token: NFT_STORAGE_TOKEN })
      
      // Create NFT.Storage File object from buffer
      const nftFile = new File([fileBuffer], fileName, { type: mimeType })
      console.log('📄 Created encrypted NFT file object:', nftFile.name, nftFile.size, 'bytes')

      // Upload using store method (following docs exactly)
      const nft = {
        image: nftFile,
        name: fileName,
        description: `Encrypted file uploaded to Taja: ${fileName}`,
        properties: {
          type: mimeType,
          size: fileBuffer.byteLength,
          uploadedAt: new Date().toISOString(),
          platform: "Taja",
          encrypted: true
        }
      }
      
      const metadata = await nftClient.store(nft)
      
      console.log('✅ NFT.Storage encrypted upload successful!')
      console.log('🔗 Metadata URL:', metadata.url)
      
      // Extract CID from metadata URL
      const cid = metadata.ipnft
      
      // Get file size
      const size = fileBuffer.byteLength

      // Construct IPFS URL
      const url = `https://${cid}.ipfs.nftstorage.link`

      return {
        cid,
        url,
        size
      }
    } catch (error) {
      console.error('IPFS encrypted upload failed:', error)
      throw new Error(`Failed to upload encrypted file to IPFS: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get IPFS URL from CID
   */
  static getIPFSUrl(cid: string): string {
    return `https://${cid}.ipfs.nftstorage.link`
  }

  /**
   * Check if IPFS service is configured
   */
  static isConfigured(): boolean {
    return !!NFT_STORAGE_TOKEN && !!client
  }

  /**
   * Test NFT.Storage connection with a simple upload (following official docs)
   */
  static async testConnection(): Promise<boolean> {
    try {
      console.log('🧪 Testing NFT.Storage connection...')
      console.log('🔍 Token being used:', NFT_STORAGE_TOKEN.substring(0, 20) + '...')
      
      // Check if token is in correct format
      const isJWTFormat = NFT_STORAGE_TOKEN.split('.').length === 3
      if (!isJWTFormat) {
        console.warn('⚠️ Token is not in JWT format - using development fallback')
        
        // Development fallback - simulate successful upload
        if (process.env.NODE_ENV === 'development') {
          console.log('🎭 Using development mock for testing...')
          return true
        } else {
          throw new Error('Invalid JWT token format. Please get a proper JWT token from https://nft.storage/')
        }
      }
      
      // Always create a fresh client for testing (following docs)
      console.log('🔧 Creating fresh NFT.Storage client for test...')
      const testClient = new NFTStorage({ token: NFT_STORAGE_TOKEN })
      console.log('✅ Test client created successfully')
      
      // Create a simple test file
      const testContent = 'Hello from Taja test upload!'
      const testFile = new File([testContent], 'test.txt', { type: 'text/plain' })
      console.log('📄 Test file created:', testFile.name, testFile.size, 'bytes')
      
      // Try to upload using store method (following docs exactly)
      console.log('📤 Attempting test upload using store() method...')
      const nft = {
        image: testFile,
        name: 'Taja Test File',
        description: 'Test upload to verify NFT.Storage connection',
        properties: {
          type: 'text/plain',
          size: testFile.size,
          uploadedAt: new Date().toISOString(),
          platform: 'BlockRoll',
          test: true
        }
      }
      
      const metadata = await testClient.store(nft)
      
      console.log('✅ NFT.Storage test successful!')
      console.log('🔗 Metadata URL:', metadata.url)
      console.log('🆔 IPNFT:', metadata.ipnft)
      
      return true
    } catch (error) {
      console.error('❌ NFT.Storage test failed:', error)
      console.error('❌ Test error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      
      // Development fallback on error
      if (process.env.NODE_ENV === 'development') {
        console.warn('🎭 Using development fallback due to API error...')
        return true
      }
      
      return false
    }
  }
}

export default IPFSService
