// src/routes/_protected.tsx
// Layout route that guards all nested routes under /_protected/*
//
// Any route file placed in src/routes/_protected/ will require authentication.
// The underscore prefix means this route segment won't appear in the URL.
// e.g., src/routes/_protected/app.tsx → /app (not /_protected/app)

import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { getAuthState } from '../lib/auth'

export const Route = createFileRoute('/_protected')({
  // beforeLoad runs before the route renders
  // This is where we check authentication
  beforeLoad: async () => {
    const { isAuthenticated, isLoading } = getAuthState()

    // TODO (Day 3): Handle loading state properly with Clerk
    if (isLoading) {
      // Could show a loading spinner or wait for auth to resolve
      return
    }

    if (!isAuthenticated) {
      // Redirect to sign-in, preserving the intended destination
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.pathname,
        },
      })
    }
  },
  component: ProtectedLayout,
})

function ProtectedLayout() {
  // This layout wraps all protected routes
  // You can add common UI elements here (e.g., authenticated nav, user menu)
  return <Outlet />
}



