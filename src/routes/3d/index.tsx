import { ThreeScene } from '@/components/3d/MyCanvas'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/3d/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full relative">
        <ThreeScene />
      </div>
    </main>
  )
}
