import React, { PureComponent } from 'react'

import InitHoc from 'common/hocs/InitHoc'
import Tool from './Tool'
import bus from './bus/bus'

@InitHoc
class Page1 extends PureComponent {
  state = {
    msg: '111'
  }

  componentDidMount = () => {
    console.log('page1', bus)
    bus.on('go', data => {
      console.log('data', data)
    })
  }

  accept = () => {}

  render() {
    return (
      <div>
        <Tool {...this.props} />
        111 state：{this.state.msg}
        <button type="button" onClick={this.accept}>
          接收
        </button>
      </div>
    )
  }
}

export default Page1
