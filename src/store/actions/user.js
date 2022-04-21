import { setToken, clearToken, http } from "@/utils";

export const login = (mobile, code) => {
  return async dispatch => {
    const res = await http.post('/authorizations', {
      mobile,
      code
    })
    // console.log(res)

    // 注意：此处获取的是 token 
    const { token } = res
    setToken(token)
    dispatch({ type: 'user/setToken', payload: token })
  }
}

export const logout = ()=>{
  return (dispatch)=>{
    clearToken()
    dispatch({ type: 'login/setToken', payload: "" })
  }
}