// src/lib/auth.ts
// Auth utilities — NO-OP until Clerk is integrated (Day 3)
//
// This module provides auth state that routes can check.
// Currently returns mock data; will be replaced with Clerk hooks.

export type UserRole = 'customer' | 'case_handler'

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  userId: string | null
  role: UserRole | null
}

/**
 * Get current auth state.
 * TODO (Day 3): Replace with Clerk's useAuth() / getAuth()
 */
export function getAuthState(): AuthState {
  // NO-OP: Always returns authenticated for development
  // This allows protected routes to render during scaffolding
  return {
    isAuthenticated: true, // ← Change to false to test redirect behavior
    isLoading: false,
    userId: 'dev-user-123',
    role: 'customer',
  }
}

/**
 * Check if user has required role.
 * TODO (Day 3): Wire to Clerk publicMetadata.role
 */
export function hasRole(requiredRole: UserRole): boolean {
  const { role } = getAuthState()
  return role === requiredRole
}



