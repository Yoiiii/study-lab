import {combineReducers} from "redux"
/*
原始:reducer
function reducer(state={
  list:{
    tab:"all",
    page:1,
    data:[]
  },
  article:{
    detail:{},
    message:[]
  }
},action){
  switch(action.type){

  }
  return state
}
*/ 
// 拆分
//负责处理list 的数据
function list(list={
  tab:"all",
  page:1,
  data:[]
},action){
  switch(action.type){
    //case "ADD":   注意:拆分之后也不能重名，否则所有匹配项都会执行
    case "LIST_ADD":
      let {data}=list
      data.push("a")
      return{
        ...list,
        data
      }
  }
  return list
}
//负责处理article 的数据
function article(article={
  detail:{},
  message:[]
},action){
  switch(action.type){
    case "ARTICLE_ADD":
      let {message}=list
      message.push("a")
      return{
        ...article,
        message
      }
  }
  return article
}

// function reducer(state={},action){
//   return {
//     list:list(state.list,action),
//     article:article(state.article,action)
//   }
// }

const reducer =combineReducers({
  list,
  article
})

export default reducer