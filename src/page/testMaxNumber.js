import React, { Component } from 'react'
import { InputNumber, Input } from 'antd'
import './styles/testNumber.css'

const keyWord = ['lala', 'bbb', 'hhh']

export default class Test extends Component {
  state = {
    number: null,
    msg: '',
    text: ''
  }

  onChange = e => {
    this.setState({ msg: e.target.value })
  }

  click = () => {
    this.setState(
      preState => ({ text: preState.msg }),
      () => {
        this.changeText()
      }
    )
  }

  numberChange = e => {
    this.setState({
      number: e
    })
  }

  changeMax = () => {
    this.setState({
      number: 100
    })
  }

  changeText = () => {
    const { text } = this.state
    let newText = text
    keyWord.forEach((item, index) => {
      const res = new RegExp(keyWord[index], 'g')
      if (res.test(text)) {
        newText = newText.replace(
          res,
          `<span style="color: red">${item}</span>`
        )
        // newText = text.replace(res, '被替换')
      }
    })
    console.log('newText', newText)
    this.setState({ text: newText })
    return newText
  }

  render() {
    const { text, msg } = this.state
    return (
      <div className="test">
        <InputNumber
          className="input-number"
          value={this.state.number}
          onChange={this.numberChange}
        />
        <span className="test-max" onClick={this.changeMax}>
          Max
        </span>

        <div>
          <Input onChange={this.onChange} value={msg} />
          <button type="button" onClick={this.click}>
            确定
          </button>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    )
  }
}
