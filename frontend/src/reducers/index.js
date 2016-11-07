import { combineReducers } from 'redux'

import quizzes from './quizzes'
import pickedQuiz from './pickedQuiz'

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  quizzes,
  pickedQuiz,
  routing: routerReducer
})

export default rootReducer
