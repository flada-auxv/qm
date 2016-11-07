export default function pickedQuiz(state = null, action) {
  switch (action.type) {
    case 'ANSWER_QUIZ':
      return action.quiz
    default:
      return state
  }
}
