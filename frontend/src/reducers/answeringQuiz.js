export default function answeringQuiz(state = '', action) {
  switch (action.type) {
    case 'ANSWER_QUIZ':
      return action.quiz
    default:
      return state
  }
}
