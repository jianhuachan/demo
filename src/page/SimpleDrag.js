import React, { Component } from 'react'
import { Icon } from 'antd'

import './styles/simpleDrag.css'

const initArr = [
  {
    id: 111
  },
  {
    id: 222
  },
  {
    id: 333
  },
  {
    id: 444
  },
  {
    id: 555
  }
]

export default class SimpleDrag extends Component {
  state = {
    dragElement: {
      id: 0
    },
    arr: initArr
  }

  onDragStart = item => {
    this.setState({ dragElement: item })
  }

  onDragEnter = (item, enterIndex) => {
    const { id: enterId } = item
    const {
      dragElement: { id: chooseId },
      arr
    } = this.state
    if (chooseId !== enterId) {
      const newList = arr.filter(i => i.id !== chooseId)
      newList.splice(enterIndex, 0, this.state.dragElement)
      this.setState({ arr: newList })
    }
  }

  render() {
    const list = this.state.arr
    return (
      <div className="simpleDragWrap">
        {list.map((item, index) => (
          <div key={item.id} className="dragDiv">
            <span
              draggable
              onDragStart={() => this.onDragStart(item)}
              onDragEnter={() => this.onDragEnter(item, index)}>
              <Icon type="bars" />
            </span>
            <span>{item.id}</span>
          </div>
        ))}
      </div>
    )
  }
}
