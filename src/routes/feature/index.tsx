import {Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/feature/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='container'><Card>
    <CardHeader>
      <CardTitle>React 特性</CardTitle>
      <CardDescription>分享React一些细节特性知识点</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
  </Card>
  </main>
}
