import React, { Component } from 'react'
import './App.css'
import { Provider } from 'mobx-react'

import Home from './page/Home'
import Page from './page/Page'
import stores from './store/common/index'

class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <div className="App">
          <Home />
          <Page />
        </div>
      </Provider>
    )
  }
}

export default App
