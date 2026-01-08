// src/routes/sign-up.tsx
// Public route — Sign up page
// URL: /sign-up

import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: SignUp,
})

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>
        TODO (Day 3): Replace with Clerk SignUp component
      </p>

      {/* Placeholder for Clerk SignUp component */}
      <div
        style={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
          marginTop: '16px',
        }}
      >
        <p>📝 Clerk SignUp component will go here</p>
        <code style={{ fontSize: '12px', color: '#666' }}>{'<SignUp redirectUrl="/app" />'}</code>
      </div>

      <p style={{ marginTop: '16px' }}>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </div>
  )
}



