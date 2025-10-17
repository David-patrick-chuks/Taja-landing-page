import { apiClient, ApiResponse } from './client'

export interface User {
  id: string
  walletAddress: string
  email?: string
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  user: User
  isNewUser: boolean
  // Tokens are stored in httpOnly cookies, not in response
}

export interface WalletConnectRequest {
  walletAddress: string
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface UpdateEmailRequest {
  email: string
}

class AuthService {
  // Connect wallet and authenticate
  async connectWallet(data: WalletConnectRequest): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post('/auth/connect-wallet', data)
  }

  // Refresh access token
  async refreshToken(data: RefreshTokenRequest): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/auth/refresh', data)
  }

  // verifySession removed - no longer needed

  // Get current user
  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    return apiClient.get('/auth/me')
  }

  // Update user email
  async updateEmail(data: UpdateEmailRequest): Promise<ApiResponse<{ user: User }>> {
    return apiClient.patch('/auth/email', data)
  }

  // Logout
  async logout(): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/auth/logout')
  }

  // Generate signature message for wallet connection
  // Signature generation removed - no longer needed
}

export const authService = new AuthService()
export default authService
