import React, { Component } from 'react'
import InitHoc from 'common/hocs/InitHoc'
import Tool from './Tool'
import Top from './Top'
import Bottom from './Bottom'
import bus from './bus/bus'

// eslint-disable-next-line
@InitHoc
class Home extends Component {
  textBus = () => {
    bus.emit('go', {
      msg: 'lallala'
    })
  }

  render() {
    return (
      <div>
        <Tool {...this.props} /> <Top />
        <Bottom />
        <button type="button" onClick={this.textBus}>
          test bus
        </button>
      </div>
    )
  }
}

export default Home
