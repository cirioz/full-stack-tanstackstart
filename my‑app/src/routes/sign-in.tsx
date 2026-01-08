// src/routes/sign-in.tsx
// Public route — Sign in page
// URL: /sign-in

import { createFileRoute, useSearch } from '@tanstack/react-router'

// Define search params for redirect after login
interface SignInSearch {
  redirect?: string
}

export const Route = createFileRoute('/sign-in')({
  validateSearch: (search: Record<string, unknown>): SignInSearch => {
    return {
      redirect: typeof search.redirect === 'string' ? search.redirect : undefined,
    }
  },
  component: SignIn,
})

function SignIn() {
  const { redirect } = useSearch({ from: '/sign-in' })

  return (
    <div>
      <h1>Sign In</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>
        TODO (Day 3): Replace with Clerk SignIn component
      </p>

      {redirect && (
        <p style={{ color: '#888', fontSize: '12px' }}>
          After signing in, you'll be redirected to: <code>{redirect}</code>
        </p>
      )}

      {/* Placeholder for Clerk SignIn component */}
      <div
        style={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
          marginTop: '16px',
        }}
      >
        <p>🔐 Clerk SignIn component will go here</p>
        <code style={{ fontSize: '12px', color: '#666' }}>
          {'<SignIn redirectUrl={redirect || "/app"} />'}
        </code>
      </div>
    </div>
  )
}



