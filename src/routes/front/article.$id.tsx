// import { useGetArticleDetail } from '@/service/article';
import { createFileRoute, notFound, rootRouteId, useLoaderData } from '@tanstack/react-router';
// import { Error } from '@/components/errors/Error';
import ArticleDetail from '@/components/ArticleDetail';
// import Loading from '@/components/Loading';
import axios from 'axios';
export const Route = createFileRoute('/front/article/$id')({
  loader: async ({params}) => {
    try {
      const article = (await axios.get(`http://10.10.25.83:3000/articles/${params.id}`)).data;
      return {article};
    } catch (error) {
      // 第一种方式处理错误 -- 父级404页面 全屏
      // throw notFound({routeId: '/front'});
      throw notFound({routeId: rootRouteId}); // 顶级路由

      // 第二种方式处理错误-- 默认显示404页面 只针对当前页面
      // throw notFound();
    }
   
  },
  // 第三种方式处理错误 --- 不同状态显示不同组件
  // notFoundComponent: () => {
  //   return <div className='bg-red-100 text-red-500 text-center'>页面不存在.....</div>
  // },
  component: RouteComponent,
})

function RouteComponent() {
  // 第一种方式获取数据
  // const {id} = Route.useParams();
  // const {data: article, isPending,isError,error} = useGetArticleDetail(id)
  // if(isPending)  return <Loading/>
  // if(isError)   return <Error error={error}/>

  // 第二种方式 获取数据
  const {article} = useLoaderData({from: Route.fullPath});

  return <ArticleDetail article={article}/>
}
