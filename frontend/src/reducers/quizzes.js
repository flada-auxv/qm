export default function quizzes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUIZ':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          content: action.content,
          correctAnswer: action.correctAnswer
        },
        ...state
      ]
    case 'EDIT_QUIZ':
      // FIXME: It's not reflected unless window-reload(API call is correct)
      // First, Action creator return {type: 'EDIT_QUIZ', 3, "hi", "hi" }
      // but this(reducer) received {type: "EDIT_QUIZ", id: "hi", content: "hi", correctAnswer: undefined}, why?
      return state.map(quiz =>
        quiz.id === action.id ? { ...quiz, content: action.content, correctAnswer: action.correctAnswer } : quiz
      )

    case 'DELETE_QUIZ':
      return state.filter(quiz =>
        quiz.id !== action.id
      )
    case 'RECEIVE_QUIZZES':
      return action.quizzes
    default:
      return state
  }
}
