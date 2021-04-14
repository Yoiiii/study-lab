import HTTP from './http'
export default function logout(){
  return function(dispatch){
    return HTTP.post("/user/logout").then(res=>{
      console.log(res);
    })
  }
}