import React, { Component } from 'react'
import InitHoc from 'common/hocs/InitHoc'
import Tool from './Tool'
import Top from './Top'
import Bottom from './Bottom'

// eslint-disable-next-line
@InitHoc
class Home extends Component {
  render() {
    return (
      <div>
        <Tool {...this.props} />
        <Top />
        <Bottom />
      </div>
    )
  }
}

export default Home
