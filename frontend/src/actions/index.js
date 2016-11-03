export const addQuiz = (content, correctAnswer) => ({ type: 'ADD_QUIZ', content, correctAnswer })
export const deleteQuiz = id => ({ type: 'DELETE_QUIZ', id })
