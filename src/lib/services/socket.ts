import { io, Socket } from 'socket.io-client'

interface SocketEvents {
  // Notification events
  'notification:new': (notification: any) => void
  'notification:read': (notificationId: string) => void
  
  // File events
  'file:uploaded': (file: any) => void
  'file:shared': (file: any) => void
  'file:deleted': (fileId: string) => void
  'file:updated': (file: any) => void
  
  // Security events
  'security:alert': (alert: any) => void
  'security:login': (data: any) => void
  
  // General events
  'connect': () => void
  'disconnect': () => void
  'error': (error: Error) => void
}

class SocketService {
  private socket: Socket | null = null
  private isConnected = false
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private listeners: Map<keyof SocketEvents, Set<Function>> = new Map()

  constructor() {
    // Socket will be initialized when user logs in
  }

  /**
   * Initialize and connect to WebSocket server
   */
  connect(token?: string): void {
    if (this.socket?.connected) {
      console.log('Socket already connected')
      return
    }

    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000'

    this.socket = io(socketUrl, {
      transports: ['websocket', 'polling'],
      auth: token ? { token } : undefined,
      reconnection: true,
      reconnectionAttempts: this.maxReconnectAttempts,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 10000,
    })

    this.setupEventListeners()
  }

  /**
   * Setup default event listeners
   */
  private setupEventListeners(): void {
    if (!this.socket) return

    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket?.id)
      this.isConnected = true
      this.reconnectAttempts = 0
      this.emit('connect')
    })

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason)
      this.isConnected = false
      this.emit('disconnect')
    })

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
      this.reconnectAttempts++
      
      if (this.reconnectAttempts >= this.maxReconnectAttempts) {
        console.error('Max reconnection attempts reached')
      }
    })

    this.socket.on('error', (error) => {
      console.error('Socket error:', error)
      this.emit('error', error)
    })

    // Listen for all custom events
    this.socket.onAny((eventName, ...args) => {
      console.log('Socket event received:', eventName, args)
    })
  }

  /**
   * Subscribe to an event
   */
  on<K extends keyof SocketEvents>(event: K, callback: SocketEvents[K]): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)?.add(callback)

    // Also register with socket.io
    if (this.socket) {
      this.socket.on(event as string, callback as any)
    }
  }

  /**
   * Unsubscribe from an event
   */
  off<K extends keyof SocketEvents>(event: K, callback: SocketEvents[K]): void {
    this.listeners.get(event)?.delete(callback)

    if (this.socket) {
      this.socket.off(event as string, callback as any)
    }
  }

  /**
   * Emit an event
   */
  private emit<K extends keyof SocketEvents>(event: K, ...args: any[]): void {
    const callbacks = this.listeners.get(event)
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(...args)
        } catch (error) {
          console.error(`Error in socket event handler for ${event}:`, error)
        }
      })
    }
  }

  /**
   * Send a custom event to server
   */
  send(event: string, data?: any): void {
    if (this.socket?.connected) {
      this.socket.emit(event, data)
    } else {
      console.warn('Socket not connected. Cannot send event:', event)
    }
  }

  /**
   * Disconnect from WebSocket server
   */
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
      this.isConnected = false
      this.listeners.clear()
    }
  }

  /**
   * Check if socket is connected
   */
  getConnectionStatus(): boolean {
    return this.isConnected && this.socket?.connected === true
  }

  /**
   * Get socket instance (use carefully)
   */
  getSocket(): Socket | null {
    return this.socket
  }

  /**
   * Join a room
   */
  joinRoom(room: string): void {
    this.send('join:room', { room })
  }

  /**
   * Leave a room
   */
  leaveRoom(room: string): void {
    this.send('leave:room', { room })
  }
}

// Create and export singleton instance
export const socketService = new SocketService()
export default socketService

