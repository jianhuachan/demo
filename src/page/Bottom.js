import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

// interface Iprops {
//   store: {add: any}
// }

// interface Istate {
//   name: string,
//   age: number
// }

@inject('stores')
@observer
class Bottom extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'aaa'
      // age: 16
    }
  }

  render() {
    const { storeA } = this.props.stores
    return (
      <div>
        <button type="button" onClick={() => storeA.add(1)}>
          ++ +
        </button>
        <p> {this.state.name}</p>
      </div>
    )
  }
}

export default Bottom
