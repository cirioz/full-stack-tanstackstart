// utils/api.ts or similar file
export const fetchWrapper = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    // This will throw an error and be caught by TanStack Query's error handling
    throw new Error('Network response was not ok')
  }

  return response.json()
}
export default fetchWrapper
