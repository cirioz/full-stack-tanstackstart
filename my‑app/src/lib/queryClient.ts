// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute before data is "stale"
      retry: 1, // Only 1 retry (avoid retry storms)
      refetchOnWindowFocus: false, // Less aggressive refetching
    },
  },
})
