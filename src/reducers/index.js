import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import auth from './auth';

const rootReducer = combineReducers({
  routing,
  auth
})

export default rootReducer
