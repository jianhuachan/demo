import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Page extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <button type="button" onClick={store.add}>+++</button>
      </div>
    )
  }
}

export default Page
