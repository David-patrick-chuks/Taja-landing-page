import { apiClient, ApiResponse } from './client'

export interface Notification {
  id: string
  type: 'file_shared' | 'file_received' | 'workspace_invite' | 'security_alert' | 'system'
  title: string
  message: string
  data?: Record<string, any>
  read: boolean
  createdAt: string
  updatedAt: string
}

export interface NotificationListResponse {
  notifications: Notification[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface UnreadCountResponse {
  count: number
}

class NotificationService {
  // Get all notifications
  async getNotifications(page: number = 1, limit: number = 20): Promise<ApiResponse<NotificationListResponse>> {
    return apiClient.get(`/notifications?page=${page}&limit=${limit}`)
  }

  // Get unread notifications only
  async getUnreadNotifications(page: number = 1, limit: number = 20): Promise<ApiResponse<NotificationListResponse>> {
    return apiClient.get(`/notifications/unread?page=${page}&limit=${limit}`)
  }

  // Get unread count
  async getUnreadCount(): Promise<ApiResponse<UnreadCountResponse>> {
    return apiClient.get('/notifications/unread-count')
  }

  // Mark notification as read
  async markAsRead(notificationId: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post(`/notifications/${notificationId}/read`)
  }

  // Mark all notifications as read
  async markAllAsRead(): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/notifications/mark-all-read')
  }

  // Delete notification
  async deleteNotification(notificationId: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete(`/notifications/${notificationId}`)
  }

  // Utility methods
  getNotificationIcon(type: string): string {
    switch (type) {
      case 'file_shared': return '📤'
      case 'file_received': return '📥'
      case 'workspace_invite': return '👥'
      case 'security_alert': return '⚠️'
      case 'system': return '🔔'
      default: return '📢'
    }
  }

  getNotificationColor(type: string): string {
    switch (type) {
      case 'file_shared': return 'text-blue-500'
      case 'file_received': return 'text-green-500'
      case 'workspace_invite': return 'text-purple-500'
      case 'security_alert': return 'text-red-500'
      case 'system': return 'text-gray-500'
      default: return 'text-gray-500'
    }
  }

  formatNotificationTime(createdAt: string): string {
    const now = new Date()
    const notificationTime = new Date(createdAt)
    const diffInSeconds = Math.floor((now.getTime() - notificationTime.getTime()) / 1000)

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
      return notificationTime.toLocaleDateString()
    }
  }
}

export const notificationService = new NotificationService()
export default notificationService
