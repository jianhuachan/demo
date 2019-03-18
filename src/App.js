import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'

import './App.css'
import routes from './routes'

import stores from './store'

// interface store {
//   stores: object
// }

function App() {
  return (
    <div className="App">
      <Provider stores={stores}>
        <Router>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
