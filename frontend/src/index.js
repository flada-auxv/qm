import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


import { MuiThemeProvider } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import reducer from './reducers'

// XXX: want to import all at once...
import App from './containers/App'
import QuizCMS from './containers/QuizCMS'
import Home from './components/Home'
import AnswerQuiz from './components/AnswerQuiz'
import AddQuizItem from './components/admin/AddQuizItem'
import MainSection from './components/admin/MainSection'
import NotFound from './components/NotFound'

const middleware = [ thunk, routerMiddleware(browserHistory) ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="quizzes/:quizId" component={AnswerQuiz} />
        </Route>
        <Route path="admin" component={QuizCMS} /* TODO: onEnter={requireAuth}*/ >
          <IndexRoute component={MainSection} />
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
