
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0 // 失败重试次数
    }
  }
})
export const useAppQuery = () => {
  const AppQueryProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }
  return {AppQueryProvider}
}