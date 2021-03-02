import {createStore} from 'redux'

function reducer(state=[
  {
    id:0,
    txt:"这是第一项数据",
    done:false
  },
  {
    id:1,
    txt:"这是第二项数据",
    done:true
  }
],action){
  return state
}

const store = createStore(reducer)

export default store