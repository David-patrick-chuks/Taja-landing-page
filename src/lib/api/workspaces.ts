import { apiClient, ApiResponse } from './client'

export interface WorkspaceMember {
  walletAddress: string
  role: 'owner' | 'admin' | 'member'
  joinedAt: string
  permissions: string[]
}

export interface Workspace {
  id: string
  name: string
  description?: string
  owner: string
  members: WorkspaceMember[]
  createdAt: string
  updatedAt: string
  settings: {
    allowMemberInvites: boolean
    requireApproval: boolean
    maxMembers: number
  }
}

export interface CreateWorkspaceRequest {
  name: string
  description?: string
  settings?: {
    allowMemberInvites?: boolean
    requireApproval?: boolean
    maxMembers?: number
  }
}

export interface AddMemberRequest {
  walletAddress: string
  role: 'admin' | 'member'
  permissions?: string[]
}

export interface UpdateMemberRoleRequest {
  walletAddress: string
  role: 'admin' | 'member'
  permissions?: string[]
}

export interface WorkspaceListResponse {
  workspaces: Workspace[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface WorkspaceFilesResponse {
  files: any[] // FileMetadata from files.ts
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

class WorkspaceService {
  // Create workspace
  async createWorkspace(data: CreateWorkspaceRequest): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.post('/workspace/create', data)
  }

  // Get user's workspaces
  async getMyWorkspaces(page: number = 1, limit: number = 20): Promise<ApiResponse<WorkspaceListResponse>> {
    return apiClient.get(`/workspace/my-workspaces?page=${page}&limit=${limit}`)
  }

  // Get workspace by ID
  async getWorkspace(id: string): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.get(`/workspace/${id}`)
  }

  // Add member to workspace
  async addMember(workspaceId: string, data: AddMemberRequest): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post(`/workspace/${workspaceId}/add-member`, data)
  }

  // Remove member from workspace
  async removeMember(workspaceId: string, walletAddress: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post(`/workspace/${workspaceId}/remove-member`, { walletAddress })
  }

  // Update member role
  async updateMemberRole(workspaceId: string, data: UpdateMemberRoleRequest): Promise<ApiResponse<{ message: string }>> {
    return apiClient.patch(`/workspace/${workspaceId}/member-role`, data)
  }

  // Get workspace files
  async getWorkspaceFiles(workspaceId: string, page: number = 1, limit: number = 20): Promise<ApiResponse<WorkspaceFilesResponse>> {
    return apiClient.get(`/workspace/${workspaceId}/files?page=${page}&limit=${limit}`)
  }

  // Delete workspace
  async deleteWorkspace(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete(`/workspace/${id}`)
  }

  // Utility methods
  getMemberRoleDisplayName(role: string): string {
    switch (role) {
      case 'owner': return 'Owner'
      case 'admin': return 'Admin'
      case 'member': return 'Member'
      default: return role
    }
  }

  canManageMembers(userRole: string): boolean {
    return userRole === 'owner' || userRole === 'admin'
  }

  canDeleteWorkspace(userRole: string): boolean {
    return userRole === 'owner'
  }
}

export const workspaceService = new WorkspaceService()
export default workspaceService
