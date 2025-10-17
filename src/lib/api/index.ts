// Export all API services
export { apiClient } from './client'
export { authService } from './auth'
export { fileService } from './files'
export { workspaceService } from './workspaces'
export { notificationService } from './notifications'
export { sdkService } from './sdk'

// Export types
export type { ApiResponse, ApiError } from './client'
export type { User, AuthResponse, WalletConnectRequest } from './auth'
export type { FileMetadata, UploadFileRequest, ShareFileRequest } from './files'
export type { Workspace, WorkspaceMember, CreateWorkspaceRequest } from './workspaces'
export type { Notification } from './notifications'
export type { ApiKey, CreateApiKeyRequest } from './sdk'
