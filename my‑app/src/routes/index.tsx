import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Week 1 – Day 2</p>
    </div>
  )
}
