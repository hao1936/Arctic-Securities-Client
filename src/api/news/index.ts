import { request } from "../../http";
export const getNewsList = (): any => {
  return request.get<any, any>('/api/newsList')
}
