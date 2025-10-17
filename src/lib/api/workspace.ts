import { apiClient, ApiResponse } from './client'

export interface WorkspaceMember {
  user: string
  role: 'owner' | 'admin' | 'member'
  joinedAt: string
}

export interface Workspace {
  id: string
  name: string
  description?: string
  owner: string
  members: WorkspaceMember[]
  createdAt: string
  updatedAt: string
}

export interface CreateWorkspaceRequest {
  name: string
  description?: string
}

export interface AddMemberRequest {
  walletAddress: string
  role?: 'admin' | 'member'
}

class WorkspaceService {
  // Create workspace
  async createWorkspace(data: CreateWorkspaceRequest): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.post('/workspace/create', data)
  }

  // Get user's workspaces
  async getMyWorkspaces(): Promise<ApiResponse<{ workspaces: Workspace[] }>> {
    return apiClient.get('/workspace/my-workspaces')
  }

  // Get workspace by ID
  async getWorkspaceById(id: string): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.get(`/workspace/${id}`)
  }

  // Add member to workspace
  async addMember(workspaceId: string, data: AddMemberRequest): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.post(`/workspace/${workspaceId}/add-member`, data)
  }

  // Remove member from workspace
  async removeMember(workspaceId: string, userId: string): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.post(`/workspace/${workspaceId}/remove-member`, { userId })
  }

  // Update member role
  async updateMemberRole(workspaceId: string, userId: string, role: string): Promise<ApiResponse<{ workspace: Workspace }>> {
    return apiClient.patch(`/workspace/${workspaceId}/member-role`, { userId, role })
  }

  // Get workspace files
  async getWorkspaceFiles(workspaceId: string): Promise<ApiResponse<{ files: any[] }>> {
    return apiClient.get(`/workspace/${workspaceId}/files`)
  }

  // Delete workspace
  async deleteWorkspace(workspaceId: string): Promise<ApiResponse<null>> {
    return apiClient.delete(`/workspace/${workspaceId}`)
  }
}

export const workspaceService = new WorkspaceService()
export default workspaceService

