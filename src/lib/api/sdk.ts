import { apiClient, ApiResponse } from './client'

export interface ApiKey {
  id: string
  name: string
  key: string
  permissions: string[]
  lastUsed?: string
  createdAt: string
  updatedAt: string
  isActive: boolean
}

export interface CreateApiKeyRequest {
  name: string
  permissions: string[]
}

export interface UpdatePermissionsRequest {
  permissions: string[]
}

export interface ApiKeyListResponse {
  apiKeys: ApiKey[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiKeyStats {
  totalRequests: number
  requestsToday: number
  requestsThisMonth: number
  lastUsed: string
  endpointsUsed: string[]
}

export interface VerifyApiKeyRequest {
  apiKey: string
}

class SdkService {
  // Create API key
  async createApiKey(data: CreateApiKeyRequest): Promise<ApiResponse<{ apiKey: ApiKey }>> {
    return apiClient.post('/sdk/create', data)
  }

  // Get user's API keys
  async getMyApiKeys(page: number = 1, limit: number = 20): Promise<ApiResponse<ApiKeyListResponse>> {
    return apiClient.get(`/sdk/my-keys?page=${page}&limit=${limit}`)
  }

  // Revoke API key
  async revokeApiKey(apiKeyId: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete(`/sdk/revoke/${apiKeyId}`)
  }

  // Update API key permissions
  async updatePermissions(apiKeyId: string, data: UpdatePermissionsRequest): Promise<ApiResponse<{ apiKey: ApiKey }>> {
    return apiClient.patch(`/sdk/${apiKeyId}/permissions`, data)
  }

  // Get API key stats
  async getApiKeyStats(apiKeyId: string): Promise<ApiResponse<{ stats: ApiKeyStats }>> {
    return apiClient.get(`/sdk/${apiKeyId}/stats`)
  }

  // Verify API key
  async verifyApiKey(data: VerifyApiKeyRequest): Promise<ApiResponse<{ valid: boolean; apiKey?: ApiKey }>> {
    return apiClient.post('/sdk/verify', data)
  }

  // Utility methods
  maskApiKey(apiKey: string): string {
    if (apiKey.length <= 8) return apiKey
    return apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4)
  }

  getPermissionDisplayName(permission: string): string {
    const permissionMap: Record<string, string> = {
      'files:read': 'Read Files',
      'files:write': 'Write Files',
      'files:delete': 'Delete Files',
      'files:share': 'Share Files',
      'workspaces:read': 'Read Workspaces',
      'workspaces:write': 'Write Workspaces',
      'workspaces:delete': 'Delete Workspaces',
      'notifications:read': 'Read Notifications',
      'admin': 'Admin Access'
    }
    return permissionMap[permission] || permission
  }

  formatLastUsed(lastUsed?: string): string {
    if (!lastUsed) return 'Never'
    
    const now = new Date()
    const lastUsedDate = new Date(lastUsed)
    const diffInSeconds = Math.floor((now.getTime() - lastUsedDate.getTime()) / 1000)

    if (diffInSeconds < 60) {
      return 'Just now'
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400)
      return `${days} day${days > 1 ? 's' : ''} ago`
    } else {
      return lastUsedDate.toLocaleDateString()
    }
  }
}

export const sdkService = new SdkService()
export default sdkService
