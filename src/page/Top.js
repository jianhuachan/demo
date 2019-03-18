import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

@inject('stores')
@observer
class Top extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  }

  render() {
    const { storeA } = this.props.stores
    return (
      <div>
        <p> 数量： {storeA.count}</p>
      </div>
    )
  }
}

export default Top
