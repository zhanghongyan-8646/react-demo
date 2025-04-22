import { useAxios } from "@/hooks/useAxios";
import { IArticle } from "@/types/article";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError } from "axios";

// 获取文章列表
export const useGetArticleList = () => {
  const {http} = useAxios();
  return useQuery<IArticle[], AxiosError>({
    queryKey: ['articles'],
    queryFn: async () => {
      return (await http.get('/articles')).data
    }
  })
}

// 获取文章详情
export const useGetArticleDetail = (id: string) => {
  const {http} = useAxios();
  return useQuery<IArticle, AxiosError>({
    queryKey: ['articles', id],
    queryFn: async () => {
      return (await http.get(`/articles/${id}`)).data
    }
  })
}

// 删除文章
export const useDelArticle = () => {
  const {http} = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (article: IArticle) => {
      return new Promise((resolve) => {
        setTimeout(async () => {
           return resolve (await http.delete(`/articles/${article.id}`));
        }, 1000);
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['articles']}); // 重新获取文章列表
    }
  })
}

// 新增文章
export const useAddArticle = () => {
  const {http} = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (article: IArticle) => {
        return await http.post('/articles', article);
    },
    onSuccess: () => {
      // 跳转到文章列表页
      navigate({to: '/'})
      // 刷新文章列表
      queryClient.invalidateQueries({queryKey: ['articles']}); 
    }
  })
}

// 修改文章
export const useUpdateArticle = () => {
  const {http} = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (article: IArticle) => {
        return await http.put(`/articles/${article.id}`, article);
    },
    onSuccess: () => {
      // 跳转到文章列表页
      navigate({to: '/'})
      // 刷新文章列表
      queryClient.invalidateQueries({queryKey: ['articles']}); 
    }
  })
}