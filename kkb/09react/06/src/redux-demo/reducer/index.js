import {createStore} from 'redux'

function reducer(state={
  nub:1,
  nub2:2
},action){
  switch(action.type){
    case "ADD":
      return{
        ...state,
        nub:state.nub+1
      }
  }
  return state
}

const store =createStore(reducer)

export default store