const defaultHeaders = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    // headers: {'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content}
  }
}

export const addQuiz = (content, correctAnswer) => ({ type: 'ADD_QUIZ', content, correctAnswer })
export const editQuiz = (id, content, correctAnswer) => ({ type: 'EDIT_QUIZ', id, content, correctAnswer })
export const deleteQuiz = id => ({ type: 'DELETE_QUIZ', id })

export const addQuizAsync = (content, correctAnswer) => dispatch => {
  return fetch('/api/quizzes', {
    method: 'POST',
    ...defaultHeaders,
    body: JSON.stringify({
      content: content,
      correct_answer: correctAnswer
    })
  })
    .then(response => response.json())
    .then(json => dispatch(addQuiz(content, correctAnswer)))
}

export const editQuizAsync = (id, content, correctAnswer) => dispatch => {
  return fetch(`/api/quizzes/${id}`, {
    method: 'PATCH',
    ...defaultHeaders,
    body: JSON.stringify({
      content: content,
      correct_answer: correctAnswer
    })
  })
  .then(response => response.json())
  .then(json => dispatch(editQuiz(content, correctAnswer)))
}

export const deleteQuizAsync = id => dispatch => {
  return fetch(`/api/quizzes/${id}`, {method: 'DELETE'})
    .then(() => dispatch(deleteQuiz(id)))
}
