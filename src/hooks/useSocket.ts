import { socketService } from '@/lib/services/socket'
import { useCallback, useEffect, useState } from 'react'

/**
 * Hook to use WebSocket functionality in components
 */
export function useSocket() {
  const [isConnected, setIsConnected] = useState(socketService.getConnectionStatus())

  useEffect(() => {
    // Update connection status
    const handleConnect = () => setIsConnected(true)
    const handleDisconnect = () => setIsConnected(false)

    socketService.on('connect', handleConnect)
    socketService.on('disconnect', handleDisconnect)

    return () => {
      socketService.off('connect', handleConnect)
      socketService.off('disconnect', handleDisconnect)
    }
  }, [])

  const connect = useCallback((token?: string) => {
    socketService.connect(token)
  }, [])

  const disconnect = useCallback(() => {
    socketService.disconnect()
  }, [])

  const send = useCallback((event: string, data?: any) => {
    socketService.send(event, data)
  }, [])

  const joinRoom = useCallback((room: string) => {
    socketService.joinRoom(room)
  }, [])

  const leaveRoom = useCallback((room: string) => {
    socketService.leaveRoom(room)
  }, [])

  return {
    isConnected,
    connect,
    disconnect,
    send,
    joinRoom,
    leaveRoom,
    socket: socketService,
  }
}

/**
 * Hook to listen to specific socket events
 */
export function useSocketEvent<T = any>(
  event: string,
  callback: (data: T) => void,
  deps: any[] = []
) {
  useEffect(() => {
    const handler = (data: T) => {
      callback(data)
    }

    socketService.on(event as any, handler as any)

    return () => {
      socketService.off(event as any, handler as any)
    }
  }, deps)
}

/**
 * Hook to listen for new notifications
 */
export function useNotifications(callback: (notification: any) => void) {
  useSocketEvent('notification:new', callback, [callback])
}

/**
 * Hook to listen for file updates
 */
export function useFileUpdates(callback: (file: any) => void) {
  useSocketEvent('file:uploaded', callback, [callback])
  useSocketEvent('file:shared', callback, [callback])
  useSocketEvent('file:updated', callback, [callback])
}

/**
 * Hook to listen for security alerts
 */
export function useSecurityAlerts(callback: (alert: any) => void) {
  useSocketEvent('security:alert', callback, [callback])
}

export default useSocket

