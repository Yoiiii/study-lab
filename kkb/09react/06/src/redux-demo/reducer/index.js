import {createStore} from 'redux'

function reducer(state={
  nub:1
},action){
  return state
}

const store =createStore(reducer)

export default store