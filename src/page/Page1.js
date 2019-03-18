import React, { PureComponent } from 'react'

import InitHoc from 'common/hocs/InitHoc'
import Tool from './Tool'

@InitHoc
class Page1 extends PureComponent {
  render() {
    return (
      <div>
        <Tool {...this.props} />
        111
      </div>
    )
  }
}

export default Page1
