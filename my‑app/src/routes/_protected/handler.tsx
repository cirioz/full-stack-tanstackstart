// src/routes/_protected/handler.tsx
// Case handler dashboard — requires authentication + case_handler role
// URL: /handler

import { createFileRoute, redirect } from '@tanstack/react-router'
import { getAuthState, hasRole } from '../../lib/auth'

export const Route = createFileRoute('/_protected/handler')({
  // Additional role check for case handlers
  beforeLoad: async () => {
    const { isAuthenticated } = getAuthState()

    if (!isAuthenticated) {
      throw redirect({ to: '/sign-in' })
    }

    // TODO (Day 3): Wire to Clerk role check
    if (!hasRole('case_handler')) {
      // User is authenticated but doesn't have handler role
      // Redirect to client dashboard instead
      throw redirect({ to: '/app' })
    }
  },
  component: HandlerDashboard,
})

function HandlerDashboard() {
  return (
    <div>
      <h1>Case Handler Dashboard</h1>
      <p>Review and manage client cases.</p>
      <p style={{ color: '#666', fontSize: '14px' }}>
        TODO: View cases, filter/search, download documents, update status
      </p>
    </div>
  )
}



