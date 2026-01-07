import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div style={{ padding: '16px' }}>
      <nav style={{ marginBottom: '16px' }}>
        <Link to="/" style={{ marginRight: '12px' }}>
          Home
        </Link>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}
