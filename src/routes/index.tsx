

import { createFileRoute } from '@tanstack/react-router'

import ArticleList from '@/components/ArticleList'
import Navbar from '@/components/Navbar'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="container m-auto">
      <Navbar />
      <ArticleList />
    </div>
  )
}