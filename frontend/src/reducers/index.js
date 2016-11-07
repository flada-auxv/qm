import { combineReducers } from 'redux'

import quizzes from './quizzes'
import answeringQuiz from './answeringQuiz'

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  quizzes,
  answeringQuiz,
  routing: routerReducer
})

export default rootReducer
