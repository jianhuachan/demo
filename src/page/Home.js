import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Home extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <p>
          数量：
          {store.count}
        </p>
      </div>
    )
  }
}

export default Home
