import { useGetArticleList } from "@/service/article";
import { Button, Card } from "antd";
import {ArticleItem} from "./ArticleItem.tsx";
import { CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import Error from "@/components/errors/E403.tsx";
import Loading from "./Loading";
import EmptyData from "./EmptyData";
import { Link } from "@tanstack/react-router";

const ArticleList = () => {
  const {isPending, isError, error, data} = useGetArticleList();
  if(isPending) return <Loading/>
  if(isError) return <Error error={error}/>
  if(!data?.length) return <EmptyData/>
  return <>
  <section className='container m-auto'>
    <Card>
      <CardHeader>
        <CardTitle>React内容学习</CardTitle>
        <CardDescription className="flex justify-between">小跟班的React学习内容练习
          <Link to='/front/create'><Button className='border-r-2'>发表文章</Button></Link>
        </CardDescription>
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
