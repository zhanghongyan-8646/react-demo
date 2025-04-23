import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/front')({
  component: RouteComponent,
  notFoundComponent: () => {
    return <div className='bg-red-100 text-red-500 text-center'>父级处理404页面不存在.....</div>
  }
})

function RouteComponent() {
  return <main className="container m-auto">
    <Outlet />
  </main>
}
