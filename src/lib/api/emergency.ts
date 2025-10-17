import { apiClient, ApiResponse } from './client'

export interface EmergencyStatus {
  hasGuardian: boolean
  guardianWallet?: string
  activeFiles: number
  sharedFiles: number
}

export interface InitiateRecoveryRequest {
  guardianWallet: string
  recoveryPhrase: string
}

class EmergencyService {
  // Initiate recovery
  async initiateRecovery(data: InitiateRecoveryRequest): Promise<ApiResponse<{ success: boolean; message: string }>> {
    return apiClient.post('/emergency/initiate-recovery', data)
  }

  // Revoke all access
  async revokeAllAccess(): Promise<ApiResponse<{ success: boolean; revokedCount: number }>> {
    return apiClient.post('/emergency/revoke-all-access', {})
  }

  // Set guardian
  async setGuardian(guardianWallet: string): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.post('/emergency/set-guardian', { guardianWallet })
  }

  // Get status
  async getStatus(): Promise<ApiResponse<EmergencyStatus>> {
    return apiClient.get('/emergency/status')
  }
}

export const emergencyService = new EmergencyService()
export default emergencyService

