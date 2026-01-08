// src/routes/__root.tsx
// Root layout — wraps all routes

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div style={{ padding: '16px', fontFamily: 'system-ui, sans-serif' }}>
      <nav
        style={{
          marginBottom: '16px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ fontWeight: 'bold' }}>
          Home
        </Link>

        <span style={{ color: '#ccc' }}>|</span>

        {/* Protected routes */}
        <Link to="/app">Dashboard</Link>
        <Link to="/handler">Handler</Link>

        <span style={{ color: '#ccc' }}>|</span>

        {/* Auth routes */}
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </nav>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
