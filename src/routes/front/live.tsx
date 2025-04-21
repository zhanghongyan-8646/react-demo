
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { LiveQr } from '@/config/LiveQr'
import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'antd'

export const Route = createFileRoute('/front/live')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Card className='container m-auto'>
      <CardHeader>
        <CardTitle>晚八点直播</CardTitle>
        <CardDescription>欢迎来到直播间交流讨论</CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-3 gap-4'>
        {LiveQr.map((live,index)=><img src={live} key={index} className="w-40 h-40 border" />)}
      </CardContent>
    </Card>
}
