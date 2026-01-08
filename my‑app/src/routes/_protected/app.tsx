// src/routes/_protected/app.tsx
// Client dashboard — requires authentication
// URL: /app

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/app')({
  component: ClientDashboard,
})

function ClientDashboard() {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <p>Welcome! This is the protected client area.</p>
      <p style={{ color: '#666', fontSize: '14px' }}>
        TODO: Create cases, upload documents, view AI analysis
      </p>
    </div>
  )
}



