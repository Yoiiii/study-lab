import {combineReducers} from "redux"
function list(list={
  tab:"all",
  page:1,
  limit:20,
  data:[]
},action){
  switch(action.type){
    case "ADD":
      return{
        ...list,
        data:action.data
      }
  }
  return list
}

const reducer =combineReducers({
  list
})
export default reducer