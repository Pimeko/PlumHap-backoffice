import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import auth from './auth';
import create_fetcher from './fetcher';

const rootReducer = combineReducers({
  routing,
  auth,
  statements : create_fetcher('statement'),
  activities : create_fetcher('activitie')
})

export default rootReducer
