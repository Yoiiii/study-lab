import HTTP from "./http"
export default function register(data){
  return function(dispatch){
    return HTTP.post("/user/register").then(res=>{
      if(res.data.code==0){
        // dispatch({
        //   type:"LOGIN",
        //   user:data.username
        // })
      }
      return res.data
    })
  }
}