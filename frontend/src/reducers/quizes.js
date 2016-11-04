const initialState = [
  {
    id: 0,
    content: 'hi',
    correctAnswer: '0'
  }
]

export default function quizes(state = initialState, action) {
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
      return state.map(quiz =>
        quiz.id === action.id ? { ...quiz, content: action.content, correctAnswer: action.correctAnswer } : quiz
      )

    case 'DELETE_QUIZ':
      return state.filter(quiz =>
        quiz.id !== action.id
      )
    default:
      return state
  }
}
