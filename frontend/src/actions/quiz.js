import { push } from 'react-router-redux'

const receiveQuizzes = (json) => ({
  type: 'RECEIVE_QUIZZES',
  quizzes: json
})

export const fetchQuizzesAsync = () => dispatch => {
  return fetch(`/api/quizzes`)
    .then(response => response.json())
    .then(json => dispatch(receiveQuizzes(json)))
}

export const answerQuiz = (quiz) => dispatch => {
  dispatch({ type: 'ANSWER_QUIZ', quiz })
  dispatch(push(`/quizzes/${quiz.id}/answer`))
}
