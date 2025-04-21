import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import E404 from '@/components/errors/E404'
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// Create a new router instance
const router = createRouter({ routeTree, 
  defaultNotFoundComponent: () =>{
    return <E404/>
  }
 })
export const useAppRouter = () => {
  const AppRouterProvider = () => {
    return <RouterProvider router={router}></RouterProvider>  
    
  }
  return {AppRouterProvider}
}