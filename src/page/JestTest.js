import React, { Component } from 'react'
import { message } from 'antd'
import InputComp from './jestTest/InputComp'

class JestTest extends Component {
  state = {
    value: ''
  }

  onInputChange = e => {
    this.setState({ value: e.target.value })
  }

  fetchData = params => {
    let res = null
    return new Promise((resolve) => {
      setTimeout(() => {
        res = {
          msg: `请求数据为${params}`
        }
        resolve(res)
      }, 1000)
      if (!params) {
        res = {
          msg: null,
          message: '请求失败',
          error: true
        }
        resolve(res)
      }
    })
  }

  render() {
    const { value } = this.state
    return (
      <InputComp
        onInputChange={this.onInputChange}
        fetchData={this.fetchData}
        value={value}
      />
    )
  }
}

export default JestTest
