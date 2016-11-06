import { combineReducers } from 'redux'

import quizzes from './quizzes'

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  quizzes,
  routing: routerReducer
})

export default rootReducer
