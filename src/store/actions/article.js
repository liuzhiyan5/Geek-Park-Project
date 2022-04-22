import { http } from '@/utils'

// 获取频道数据
export const getChannels = () => {
  return async dispatch => {
    const data = await http.get('channels')
    dispatch({ type: 'article/setChannels', payload: data.channels })
  }
}

// 获取文章数据
export const getArticles = (params) => {
  return async dispatch => {
    const data = await http.get('mp/articles', { params })
    // console.log(data)
    dispatch({ type: 'article/setArticles', payload: data })
  }
}

// 删除文章数据
export const delArticle = id => {
  return async dispatch => {
    await http.delete('mp/articles/' + id)
  }
}