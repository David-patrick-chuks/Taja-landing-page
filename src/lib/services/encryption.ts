import CryptoJS from 'crypto-js'

export interface EncryptionResult {
  encryptedData: string
  iv: string
  key: string
}

export class EncryptionService {
  /**
   * Encrypt file data using AES-256-CBC
   */
  static encryptFile(fileBuffer: ArrayBuffer, password?: string): EncryptionResult {
    try {
      // Convert ArrayBuffer to WordArray
      const wordArray = CryptoJS.lib.WordArray.create(fileBuffer)
      
      // Generate random IV
      const iv = CryptoJS.lib.WordArray.random(16)
      
      // Generate or use provided password
      const key = password ? CryptoJS.enc.Utf8.parse(password) : CryptoJS.lib.WordArray.random(32)
      
      // Encrypt the file
      const encrypted = CryptoJS.AES.encrypt(wordArray, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      
      return {
        encryptedData: encrypted.toString(),
        iv: iv.toString(CryptoJS.enc.Hex),
        key: key.toString(CryptoJS.enc.Hex)
      }
    } catch (error) {
      console.error('Encryption failed:', error)
      throw new Error(`File encryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Decrypt file data using AES-256-CBC
   */
  static decryptFile(encryptedData: string, key: string, iv: string): ArrayBuffer {
    try {
      const keyWordArray = CryptoJS.enc.Hex.parse(key)
      const ivWordArray = CryptoJS.enc.Hex.parse(iv)
      
      const decrypted = CryptoJS.AES.decrypt(encryptedData, keyWordArray, {
        iv: ivWordArray,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      
      return this.wordArrayToArrayBuffer(decrypted)
    } catch (error) {
      console.error('Decryption failed:', error)
      throw new Error(`File decryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Generate file hash
   */
  static generateFileHash(fileBuffer: ArrayBuffer): string {
    const wordArray = CryptoJS.lib.WordArray.create(fileBuffer)
    return CryptoJS.SHA256(wordArray).toString()
  }

  /**
   * Convert CryptoJS WordArray to ArrayBuffer
   */
  private static wordArrayToArrayBuffer(wordArray: CryptoJS.lib.WordArray): ArrayBuffer {
    const words = wordArray.words
    const sigBytes = wordArray.sigBytes
    const buffer = new ArrayBuffer(sigBytes)
    const uint8Array = new Uint8Array(buffer)
    
    for (let i = 0; i < sigBytes; i++) {
      uint8Array[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
    }
    
    return buffer
  }

  /**
   * Generate random encryption key
   */
  static generateKey(): string {
    return CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex)
  }

  /**
   * Generate random IV
   */
  static generateIV(): string {
    return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex)
  }
}

export default EncryptionService
