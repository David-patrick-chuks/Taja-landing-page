import { apiClient, ApiResponse } from './client'

export interface FileMetadata {
  id: string
  fileName: string
  fileType: string
  fileSize: number
  cid: string
  owner: string
  receiver: string
  workspace?: string
  expiryDate?: string
  createdAt: string
  updatedAt: string
  metadata?: Record<string, any>
  tags?: string[]
  accessType: 'private' | 'public' | 'restricted'
}

export interface UploadFileRequest {
  fileName: string
  fileType?: string
  receiver: string
  workspace?: string
  expiryDate?: string
  metadata?: Record<string, any>
  tags?: string[]
  accessType: 'private' | 'public' | 'restricted'
  encryptionType?: 'aes256' | 'hybrid'
  description?: string
}

export interface ShareFileRequest {
  receiver: string
  expiryDate?: string
  permissions?: string[]
}

export interface RevokeAccessRequest {
  receiver: string
}

export interface EmergencyAccessRequest {
  reason: string
  emergencyContact?: string
}

export interface FileListResponse {
  files: FileMetadata[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

class FileService {
  // Upload file
  async uploadFile(file: File, data: UploadFileRequest): Promise<ApiResponse<{ file: FileMetadata }>> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', data.fileName)
    formData.append('receiver', data.receiver)
    formData.append('accessType', data.accessType)
    
    if (data.fileType) formData.append('fileType', data.fileType)
    if (data.workspace) formData.append('workspace', data.workspace)
    if (data.expiryDate) formData.append('expiryDate', data.expiryDate)
    if (data.description) formData.append('description', data.description)
    if (data.encryptionType) formData.append('encryptionType', data.encryptionType)
    if (data.tags) formData.append('tags', JSON.stringify(data.tags))
    if (data.metadata) formData.append('metadata', JSON.stringify(data.metadata))

    return apiClient.uploadFile('/file/upload', formData)
  }

  // Get user's files
  async getMyFiles(page: number = 1, limit: number = 20): Promise<ApiResponse<FileListResponse>> {
    return apiClient.get(`/file/my-files?page=${page}&limit=${limit}`)
  }

  // Get files shared by user
  async getSharedByMe(page: number = 1, limit: number = 20): Promise<ApiResponse<FileListResponse>> {
    return apiClient.get(`/file/shared-by-me?page=${page}&limit=${limit}`)
  }

  // Get files received by user
  async getReceivedFiles(page: number = 1, limit: number = 20): Promise<ApiResponse<FileListResponse>> {
    return apiClient.get(`/file/received?page=${page}&limit=${limit}`)
  }

  // Get file by ID
  async getFileById(id: string): Promise<ApiResponse<{ file: FileMetadata }>> {
    return apiClient.get(`/file/${id}`)
  }

  // Download file
  async downloadFile(id: string): Promise<Blob> {
    return apiClient.downloadFile(`/file/${id}/download`)
  }

  // Share file
  async shareFile(id: string, data: ShareFileRequest): Promise<ApiResponse<{ file: FileMetadata }>> {
    return apiClient.post(`/file/${id}/share`, { recipientWallet: data.receiver })
  }

  // Revoke access
  async revokeAccess(id: string, data: RevokeAccessRequest): Promise<ApiResponse<{ file: FileMetadata }>> {
    return apiClient.post(`/file/${id}/revoke`, { walletAddress: data.receiver })
  }

  // Delete file
  async deleteFile(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete(`/file/${id}`)
  }

  // Enable emergency access
  async enableEmergencyAccess(id: string, data: EmergencyAccessRequest): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post(`/file/${id}/emergency-access`, data)
  }

  // Utility methods
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() || ''
  }

  getFileIcon(fileType: string): string {
    const extension = fileType.toLowerCase()
    
    if (extension.includes('pdf')) return '📄'
    if (extension.includes('doc') || extension.includes('docx')) return '📝'
    if (extension.includes('xls') || extension.includes('xlsx')) return '📊'
    if (extension.includes('ppt') || extension.includes('pptx')) return '📈'
    if (extension.includes('image') || extension.includes('jpg') || extension.includes('png') || extension.includes('gif')) return '🖼️'
    if (extension.includes('video')) return '🎥'
    if (extension.includes('audio')) return '🎵'
    if (extension.includes('zip') || extension.includes('rar')) return '📦'
    if (extension.includes('txt')) return '📃'
    
    return '📁'
  }
}

export const fileService = new FileService()
export default fileService
