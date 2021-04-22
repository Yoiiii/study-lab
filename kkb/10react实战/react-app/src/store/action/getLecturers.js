
import HTTP from './http'
export default function getLecturers(){
  return function(dispatch){
    return HTTP.post('/lecturer/list?page=1&row=100',{
      order:"desc",
      sort:'sort',
      category_id:2,
      recommend:1
    }).then(res=>{
      dispatch({
        type:"LOAD_LECTURERS",
        data:res.data,
      })
    })
  }
}