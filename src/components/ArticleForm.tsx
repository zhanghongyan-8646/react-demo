import { Button, Card } from 'antd'

import { useAddArticle, useUpdateArticle } from '@/service/article'
import { IArticle } from '@/types/article'
import { useForm } from '@tanstack/react-form'
import classNames from 'classnames'
import { z } from 'zod'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { ValidateErrors } from './ValidateErrors'
interface IArticleFormProps {
  title: string;
  data: IArticle | null;
}

const articleSchema = z.object({
  title: z.string().min(1, '标题不能为空'),
  preview: z.string().min(1,'预览不能为空'),
  content: z.string().min(1, '文章内容不能为空'),
})
export const ArticleForm = ({title, data}: IArticleFormProps) => {
  const addMutation = useAddArticle()
  const updateMutation = useUpdateArticle()
  const form = useForm({
    defaultValues: data,
    validators: {
      onChange: articleSchema,
    },
    onSubmit: async ({value}) => {
      const mutation = data?.id ? updateMutation : addMutation;
      mutation.mutate(value as IArticle);
     
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
          <CardTitle>{title}</CardTitle>
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
                <ValidateErrors errors={field.state.meta.errors} />
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
                <ValidateErrors errors={field.state.meta.errors} />
              </div>
            )
          }} />

          <form.Field name="content" children = {(field) => {
            return (
              <div className='mt-4'>
                <Label htmlFor="email">文章内容</Label>
                <Textarea rows={4} value={field.state.value} onChange={e => {
                  field.handleChange(e.target.value)
                }}/>
                <ValidateErrors errors={field.state.meta.errors} />
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
