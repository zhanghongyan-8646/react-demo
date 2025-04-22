import { createFileRoute } from '@tanstack/react-router'
import { ArticleForm } from '@/components/ArticleForm'
import { Random } from 'mockjs'
import { IArticle } from '@/types/article'

export const Route = createFileRoute('/front/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const data = {
    title: Random.csentence(3, 5),
    content: Random.cparagraph(),
    preview: '/images/1.png',
  } as IArticle
  return (
    <main className='container'>
      <ArticleForm title='发表文章' data ={data} />
    </main>
  )
}
