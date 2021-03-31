import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import list from './reducer/list'
import topic from './reducer/topic'
export default createStore(combineReducers({
  list,
  topic
}),applyMiddleware(thunk))