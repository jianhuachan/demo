import React, { Component } from 'react'
import { fabric } from 'fabric'
// import PosterEdit from './PosterEdit'
import deletePic from './pic/delete.png'
import './styles/fabric.css'

class Fabric extends Component {
  constructor() {
    super()
    this.card = null
    this.state = {
      linkArr: []
    }
  }

  componentDidMount = () => {
    const card = new fabric.Canvas('canvas', {
      width: 800,
      height: 600,
      backgroundColor: 'pink'
    })
    card.selection = false // 禁止选中多个对象
    this.card = card
  }

  // 添加link
  addLink = () => {
    const { linkArr } = this.state
    const rect = new fabric.Rect({
      fill: 'skyblue',
      width: 100,
      height: 100
    })

    const text = new fabric.Text('添加', {
      fontSize: 14,
      left: 50,
      top: 50,
      fill: '#FFFFFF',
      width: 100,
      height: 100,
      originX: 'center',
      originY: 'center'
    })

    const group = new fabric.Group([rect, text], {
      left: 10,
      top: 10,
      hasRotatingPoint: false, // 是否旋转
      cornerColor: 'orange', // 控制点颜色
      transparentCorners: false, // 缩放点实心
      lockScalingFlip: true // 对象翻转
    })

    group.on('selected', () => {
      this.deleteIcon()
      this.addIcon(group)
    })

    group.on('scaling', e => {
      /* eslint-disable */
      const target = e.target._objects[1]
      /* eslint-enable */
      if (e.target.scaleX < 1) {
        target.scaleX = 1 + (1 - e.target.scaleX)
      } else {
        target.scaleX = 1 / e.target.scaleX
      }
      if (e.target.scaleY < 1) {
        target.scaleY = 1 + (1 - e.target.scaleY)
      } else {
        target.scaleY = 1 / e.target.scaleY
      }
      this.deleteIcon()
    })

    group.on('scaled', () => {
      this.addIcon(group)
    })

    group.on('moving', () => {
      this.deleteIcon()
    })

    group.on('moved', () => {
      this.addIcon(group)
    })

    group.on('mousedblclick', () => {
      /* eslint-disable */
      group.remove(group._objects[1])
      /* eslint-enable */
      const editText = new fabric.Text('修改', {
        fontSize: 14,
        fill: '#FFFFFF',
        originX: 'center',
        originY: 'center'
      })
      group.add(editText)
      this.card.renderAll()
    })

    this.setState({ linkArr: [...linkArr, group] })
    // preserveObjectStacking 禁止选中图层时自定置于顶部
    this.card.add(group).renderAll().preserveObjectStacking = true
  }

  // 添加删除icon
  addIcon = group => {
    const imgElement = document.getElementById('deleteIcon')
    const deleteIcon = new fabric.Image(imgElement, {
      icon: true, // 自定义属性
      width: 100,
      height: 100,
      top: group.top + 8,
      left: group.left + group.width * group.scaleX - 22,
      scaleX: 0.13,
      scaleY: 0.13,
      hasControls: false, // 控制点
      hoverCursor: 'pointer', // 鼠标悬浮样式
      lockMovementX: true, // 禁止x轴移动
      lockMovementY: true // 禁止y轴移动
    })

    deleteIcon.on('mouseup', () => {
      this.deleteLink(group)
    })

    this.card
      .add(deleteIcon)
      .bringToFront(deleteIcon)
      .renderAll()
  }

  // 删除icon
  deleteIcon = () => {
    const deleteIcon = this.card.getObjects().filter(i => i.icon)[0]
    this.card.remove(deleteIcon).renderAll()
  }

  // 删除link
  deleteLink = group => {
    this.card.remove(group)
    this.deleteIcon()
  }

  // 添加图片
  addPic = () => {
    fabric.Image.fromURL(
      'http://www.logicsolutions.com/wp-content/uploads/2015/06/html5.png',
      img => {
        img.set({
          top: 0,
          left: 0,
          crossOrigin: 'Anonymous', // 不加可能会出现画布污染
          hasControls: false, // 控制点
          hoverCursor: 'default', // 鼠标悬浮样式
          lockMovementX: true, // 禁止x轴移动
          lockMovementY: true, // 禁止x轴移动
          hasBorder: false
        })
        img.on('selected', () => {
          // moveTo(object, index) 移动object图层
          // this.card.moveTo(img, 100)
        })
        this.card.add(img)
      }
    )
  }

  render() {
    return (
      <div className="fabricWrap">
        <div>
          <button type="button" onClick={this.addLink}>
            添加热区
          </button>
          <button type="button" onClick={this.addPic}>
            添加图片
          </button>
        </div>
        <canvas id="canvas" width="0" height="0" />
        <img
          src={deletePic}
          alt=""
          style={{ display: 'none', width: 14 }}
          id="deleteIcon"
        />
      </div>
    )
  }
}

export default Fabric
