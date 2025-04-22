import { IArticle } from '@/types/article'
import { Link } from '@tanstack/react-router'
import { Button, message } from 'antd'
import classNames from 'classnames'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { useDelArticle } from '@/service/article'

export const ArticleItem:FC<{className?:string, state?: boolean,article: IArticle}> = ({className,state,article}) => {
  return (
   <div className={classNames(
    'mb-3 rounded-sm border overflow-hidden flex items-center gap-3 hover:bg-muted duration-200',
    state,
    className
  )}>
      <LazyLoadImage
        className='w-12 h-12 object-cover'
        src={article.preview}
      />
        {/* <img className='w-12 h-12 object-cover' src={article.preview}></img> */}
      <div className='flex-1'>
         <Link to='/front/article/$id' params={{id:article.id}} >
        <div className='text-lg font-medium'>{article.title}</div>
        </Link>
        <div className='text-sm text-gray-500'>{article.content}</div>
      </div>
      <div className="flex items-center gap-2 mr-3">
        <DelArticleButton article={article} />
        <Link to ='/front/edit/$id' params={{id: article.id}}>
          <Button type="primary" size='small'>编辑</Button>
        </Link>
      </div>
      
    </div>
  )
}

// 编辑文章按钮


// 删除文章按钮
interface DelArticleButtonProps {
  article: IArticle;
}
function DelArticleButton ({article}: DelArticleButtonProps) {
  const delArticle = useDelArticle();
  const handleDelArticle = async () => {
    await delArticle.mutateAsync(article,{
      onSuccess: () => {
        message.success('删除成功');
      }
    });
  }
  // delArticle.isIdle 表示当前请求是否处于空闲状态，只有在空闲状态下才可以触发删除操作, 防止重复点击
  return <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button type="primary" size='small' disabled={!delArticle.isIdle}>删除</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>确定删除文章吗?</AlertDialogTitle>
        <AlertDialogDescription>
          文章删除后将不能恢复，请谨慎操作。
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>取消</AlertDialogCancel>
        <AlertDialogAction onClick={handleDelArticle}>确定</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
}
