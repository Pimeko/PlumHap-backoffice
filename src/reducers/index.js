import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import auth from './auth';
import statements from './statements';

const rootReducer = combineReducers({
  routing,
  auth,
  statements
})

export default rootReducer
