
import Navbar from '@/components/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})