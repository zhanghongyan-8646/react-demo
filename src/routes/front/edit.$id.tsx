import { ArticleForm } from '@/components/ArticleForm'
import EmptyData from '@/components/EmptyData';
import { useGetArticleDetail } from '@/service/article';
import { Loading } from '@icon-park/react';
import { createFileRoute } from '@tanstack/react-router'
import { Error } from '@/components/errors/Error';
export const Route = createFileRoute('/front/edit/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  const { isPending, isError, error, data } = useGetArticleDetail(id);
  if (isPending) return <Loading />;
  if (isError) return <Error error={error} />;
  if (!data) return <EmptyData />;
  return <ArticleForm title={`编辑${data.title}文章`} data={data} />;
}
