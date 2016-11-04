export const addQuiz = (content, correctAnswer) => ({ type: 'ADD_QUIZ', content, correctAnswer })
export const editQuiz = (id, content, correctAnswer) => ({ type: 'EDIT_QUIZ', id, content, correctAnswer })
export const deleteQuiz = id => ({ type: 'DELETE_QUIZ', id })
