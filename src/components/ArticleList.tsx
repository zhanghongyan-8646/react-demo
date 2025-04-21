import { useGetArticleList } from "@/service/article";
import { Card } from "antd";
import {ArticleItem} from "./ArticleItem.tsx";
import { CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import Error from "@/components/errors/E403.tsx";
import Loading from "./Loading";
import EmptyData from "./EmptyData";

const ArticleList = () => {
  const {isPending, isError, error, data} = useGetArticleList();
  if(isPending) return <Loading/>
  if(isError) return <Error error= {error}/>
  if(!data?.length) return <EmptyData/>
  return <>
  <section className='container m-auto'>
    <Card>
      <CardHeader>
        <CardTitle>React内容学习</CardTitle>
        <CardDescription>小跟班的React学习内容练习</CardDescription>
      </CardHeader>
      <CardContent>
        {data.map((article) => {
          return <ArticleItem className='border-2 border-cyan-500' key={article.id} state={true} article={article}/>
        })}
      </CardContent>
    </Card>
    </section>
  </>
}

export default ArticleList
