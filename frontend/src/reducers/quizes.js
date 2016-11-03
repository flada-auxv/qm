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

    default:
      return state
  }
}
