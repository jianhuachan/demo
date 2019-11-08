import React, { Component } from 'react'
import { Input, message, Button } from 'antd'
import PropTypes from 'prop-types'

class InputComp extends Component {
  state = {
    placeholder: 'jest test',
    msg: ''
  }

  componentDidMount() {
    this.getData()
  }

  getData = async (val) => {
    const res = await this.props.fetchData(val)
    console.log('res', res)
    if (res.error) {
      message.error(res.message)
    }
    this.setState({ msg: res.msg })
  }

  render() {
    const { placeholder, msg } = this.state
    const { value } = this.props
    return (
      <div>
        <Input placeholder={placeholder} onChange={this.props.onInputChange} value={value} />
        <p>{msg}</p>
        <Button type="ghost" onClick={() => this.getData(value)}>请求</Button>
      </div>
    )
  }
}

InputComp.propTypes = {
  onInputChange: PropTypes.func,
  fetchData: PropTypes.any,
  value: PropTypes.string
}

export default InputComp
