import { apiClient, ApiResponse } from './client'

export interface Automation {
  _id: string
  user: string
  name: string
  description: string
  trigger: string
  action: string
  config: Record<string, any>
  status: 'active' | 'inactive'
  lastRun?: string
  runCount: number
  createdAt: string
  updatedAt: string
}

export interface CreateAutomationRequest {
  name: string
  description: string
  trigger: string
  action: string
  config?: Record<string, any>
}

export interface AutomationStats {
  total: number
  active: number
  inactive: number
  totalRuns: number
}

class AutomationService {
  // Get automations
  async getAutomations(): Promise<ApiResponse<{ automations: Automation[] }>> {
    return apiClient.get('/automation/list')
  }

  // Create automation
  async createAutomation(data: CreateAutomationRequest): Promise<ApiResponse<{ automation: Automation }>> {
    return apiClient.post('/automation/create', data)
  }

  // Toggle automation
  async toggleAutomation(id: string): Promise<ApiResponse<{ automation: Automation }>> {
    return apiClient.patch(`/automation/${id}/toggle`, {})
  }

  // Delete automation
  async deleteAutomation(id: string): Promise<ApiResponse<null>> {
    return apiClient.delete(`/automation/${id}`)
  }

  // Get stats
  async getStats(): Promise<ApiResponse<AutomationStats>> {
    return apiClient.get('/automation/stats')
  }
}

export const automationService = new AutomationService()
export default automationService

