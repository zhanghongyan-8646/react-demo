import { createFileRoute } from '@tanstack/react-router'
import ArticleForm from '@/components/ArticleForm.tsx'

export const Route = createFileRoute('/front/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className='container'>
      <ArticleForm />
    </main>
  )
}
