"use client"

import { authService, User } from '@/lib/api'
import { useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { useCallback, useEffect, useState } from 'react'

interface UseWalletAuthReturn {
  user: User | null
  isLoading: boolean
  isConnected: boolean
  error: string | null
  connectWallet: () => Promise<void>
  disconnect: () => Promise<void>
  refreshUser: () => Promise<void>
}

export function useWalletAuth(): UseWalletAuthReturn {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const { disconnect: disconnectWallet } = useDisconnect()
  
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasTriedAuth, setHasTriedAuth] = useState(false)

  // Manual auth check function - only called when user explicitly connects
  const checkAuthStatus = useCallback(async () => {
    if (!isConnected || !address || isLoading) {
      setUser(null)
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      
      const response = await authService.getCurrentUser()
      
      if (response.success) {
        setUser(response.data.user)
      } else {
        setUser(null)
        setError('Authentication failed')
      }
    } catch (err: any) {
      console.error('Auth check failed:', err)
      setUser(null)
      setError(err.message || 'Authentication check failed')
    } finally {
      setIsLoading(false)
    }
  }, [isConnected, address, isLoading])

  // Expose checkAuthStatus for manual use
  const refreshUser = useCallback(async () => {
    await checkAuthStatus()
  }, [checkAuthStatus])

  // AUTO-AUTHENTICATION DISABLED FOR DEMO - NO MORE LOOPS
  useEffect(() => {
    if (!isConnected) {
      setUser(null)
      setError(null)
      setHasTriedAuth(false)
    }
  }, [isConnected])

  const connectWallet = useCallback(async () => {
    if (!address) {
      // Open wallet connection modal
      open({ view: 'Connect' })
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      // Authenticate with backend - just send wallet address
      const response = await authService.connectWallet({
        walletAddress: address,
      })

      if (response.success) {
        setUser(response.data.user)
        // Tokens are automatically stored in httpOnly cookies by the backend
      } else {
        throw new Error(response.message || 'Authentication failed')
      }

    } catch (err: any) {
      console.error('Wallet connection failed:', err)
      setError(err.message || 'Failed to connect wallet')
      
      // Just show error, don't auto-disconnect
      setError(err.message || 'Authentication failed')
    } finally {
      setIsLoading(false)
    }
  }, [address, open])

  const disconnect = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Logout from backend
      await authService.logout()
      
      // Clear local state
      setUser(null)
      
      // Disconnect wallet using Reown hook
      await disconnectWallet()
    } catch (err: any) {
      console.error('Disconnect failed:', err)
      setError(err.message || 'Failed to disconnect')
    } finally {
      setIsLoading(false)
    }
  }, [disconnectWallet])


  return {
    user,
    isLoading,
    isConnected: isConnected && !!user,
    error,
    connectWallet,
    disconnect,
    refreshUser,
  }
}
