import React, { Component } from 'react'
import Loading from 'common/loading'

const InitHoc = Comp =>
  class extends Component {
    state = {
      data: [],
      isLoading: true
    }

    componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1000)
    }

    render() {
      const { data, isLoading } = this.state
      if (isLoading) {
        return <Loading />
      }
      return <Comp {...this.props} data={data} />
    }
  }

export default InitHoc
