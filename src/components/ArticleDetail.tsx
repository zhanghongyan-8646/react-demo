import { Button, Card } from 'antd'
import { FC } from 'react'
import { CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { IArticle } from '@/types/article'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from '@tanstack/react-router'

const ArticleDetail:FC<{article: IArticle}> = ({article}) => {
  return (
    <section className='container m-auto'>
    <Card>
      <CardHeader>
        <CardTitle>
          <Link to='/'>
            <Button className='mb-4'>返回</Button>
          </Link>
          <h1 className='text-4xl'>{article.title}</h1>
        </CardTitle>
        <CardDescription className='mt-2'>
          <LazyLoadImage className='w-80 h-80' src={article.preview} />
        </CardDescription>
      </CardHeader>
      <CardContent className='text-muted-foreground mt'>
        {article.content}
      </CardContent>
    </Card>
    
    </section>
  )
}

export default ArticleDetail
