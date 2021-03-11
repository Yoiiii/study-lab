import {createStore} from "redux"

function reducer(state={
  nub:1
},action){
  switch(action.type){
    case "ADD":
      let {nub}=state
      nub++
      return {
        nub
      }
  }
  return state
}

const store =createStore(reducer)

// store.subscribe(()=>{
//   console.log(store.getState());
// })

// setInterval(()=>{
//   store.dispatch({
//     type:"ADD"
//   })
// },1000) 
//console.log(store);

export default store    