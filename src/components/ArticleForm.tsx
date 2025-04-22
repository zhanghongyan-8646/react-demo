import { Button, Card } from 'antd'

import { useForm } from '@tanstack/react-form'
import classNames from 'classnames'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
// import { useAddArticle } from '@/service/article'
const ArticleForm = () => {
  const form = useForm({
    defaultValues: {
      title: '222',
      content: '',
      preview: '' 
    },
    onSubmit: async ({value}) => {
      console.log(value);
     
    }
  })

  return (
    <form onSubmit={e => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}>
      <Card>  
        <CardHeader>
          <CardTitle>发表文章</CardTitle>
          <CardDescription>请发表正能量的内容</CardDescription>
        </CardHeader>
        <CardContent>
          <form.Field name="title" children = {(field) => {
            return (
              <div>
                <Label htmlFor="email">标题</Label>
                <Input value={field.state.value} onChange={e => {
                  field.handleChange(e.target.value)
                }}/>
              </div>
            )
          }} />

          <form.Field name= "preview" children = {(field) => {
            return (
              <div className='mt-4'>
                <Label htmlFor="email">预览</Label>
                <div className='flex gap-2'>
                  {Array(10).fill(null).map((_,index) => {
                    return <img src={`/images/${index+1}.png`} key={index} 
                     className={classNames(
                      'w-16 h-16 object-cover rounded-md cursor-pointer hover:scale-125 transition duration-300',
                      {
                        'border-4 border-red-500': field.state.value.includes(`/images/${index+1}.png`)
                      }
                    )}
                     onClick={()=>{
                      field.handleChange(`/images/${index+1}.png`)
                     }}/>
                  })}
                </div>
              </div>
            )
          }} />

          <form.Field name="content" children = {(field) => {
            return (
              <div className='mt-4'>
                <Label htmlFor="email">文章内容</Label>
                <Textarea value={field.state.value} onChange={e => {
                  field.handleChange(e.target.value)
                }}/>
              </div>
            )
          }} />
        </CardContent>
        <CardFooter>
          <Button type="primary" htmlType="submit">
            发表
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default ArticleForm
