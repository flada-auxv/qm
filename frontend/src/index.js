import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './reducers'

import App from './containers/App'
import QuizCMS from './containers/QuizCMS'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

if (window.location.pathname == '/admin') {
  store.dispatch(push('/admin'))
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/admin" component={QuizCMS} /* TODO: onEnter={requireAuth}*/ />
    </Router>
  </Provider>,
  document.getElementById('root')
)
