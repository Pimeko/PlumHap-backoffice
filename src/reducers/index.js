import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import auth from './auth';
import statements from './statements';
import activities from './activities';

const rootReducer = combineReducers({
  routing,
  auth,
  statements,
  activities
})

export default rootReducer
