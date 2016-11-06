import { combineReducers } from 'redux'

import quizes from './quizes'

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  quizes,
  routing: routerReducer
})

export default rootReducer
