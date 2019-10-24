import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fabric } from 'fabric'

// import './style/canvas.css'

export default class PosterEdit extends Component {
  state = {
    canvasHeight: 0
  }

  static propTypes = {
    chooseImg: PropTypes.func.isRequired,
    imgArr: PropTypes.array.isRequired,
    linkArr: PropTypes.array.isRequired
    // imgIndex: PropTypes.number
  }

  componentDidMount = () => {
    const card = new fabric.Canvas('canvas', {
      width: 500,
      height: 0,
      left: 500
    })
    this.card = card
  }

  componentWillReceiveProps = nextProps => {
    console.log('next', nextProps)
    console.log('this', this.props)
    if (nextProps.imgArr.length > this.props.imgArr.length) {
      this.addImg(nextProps)
    }

    if (nextProps.imgArr.length < this.props.imgArr.length) {
      this.deleteImg(nextProps)
    }

    if (nextProps.linkArr.length !== this.props.linkArr.length) {
      this.addLink(nextProps)
    }

    // if (nextProps.imgIndex !== this.props.imgIndex) {
    // this.addImg(nextProps)
    // this.addLink(nextProps)
    // }
  }

  addImg = nextProps => {
    // this.card.clear()
    // this.card.setHeight(0)
    const { imgArr } = nextProps
    // let canvasHeight = 0
    const { canvasHeight } = this.state
    // imgArr.forEach((item, index) => {
    fabric.Image.fromURL(imgArr[imgArr.length - 1], img => {
      img.set({
        top: imgArr.length - 1 === 0 ? 0 : canvasHeight,
        scaleX: 0.2,
        scaleY: 0.2,
        crossOrigin: 'Anonymous',
        hasControls: false
        // lockMovementX: true,
        // lockMovementY: true,
      })
      img.on('selected', () => {
        const t = this.card.getActiveObjects()[0]
        console.log('choose', this.card.getObjects().indexOf(t))
        this.props.chooseImg(this.card.getObjects().indexOf(t))
        // console.log('t', t)
        // t.sendToBack()
        // this.card.moveTo(img, 0)
        // this.addLink(nextProps)
      })
      this.setState(
        preState => ({
          canvasHeight: preState.canvasHeight + img.height * 0.2
        }),
        () => {
          this.card.setHeight(this.state.canvasHeight)
          this.card.add(img)
          this.card.moveTo(img, 0)
        }
      )
      // canvasHeight += img.height * (this.card.width / img.width)
    })
    // })
  }

  deleteImg = nextProps => {
    /* eslint-disable */
    // const { imgArr } = nextProps
    const { canvasHeight } = this.state
    const all = this.card.getObjects()
    const deleteImg = this.card.getActiveObjects()[0]
    const deleteIndex = all.indexOf(deleteImg)

    this.setState(
      preState => ({
        canvasHeight: preState.canvasHeight - deleteImg.height * 0.2
      }),
      () => {
        // console.log('img', this.card.getObjects())
        this.card.remove(deleteImg)
        this.card.setHeight(canvasHeight - deleteImg.height * 0.2)
        all.forEach((item, itemIndex) => {
          if (item._element && itemIndex < deleteIndex) {
            console.log('deleteIndex', deleteIndex)
            console.log('itemIndex', itemIndex)
            item.set({
              top: item.top - deleteImg.height * 0.2
            })
            this.card.renderAll()
          }
        })
      }
    )
  }

  addLink = nextProps => {
    const { linkArr } = nextProps
    linkArr.forEach((item, index) => {
      // const rect = new fabric.Rect({
      //   left: item.x,
      //   top: item.y,
      //   width: item.width,
      //   height: item.height,
      //   fill: 'skyblue'
      // })
      // this.card.add(rect)
      // this.card.moveTo(rect, 10)

      const rect = new fabric.Rect({
        fill: 'skyblue',
        width: 100,
        height: 100
      })

      const text = new fabric.Text('添加', {
        fontSize: 14,
        left: 40,
        top: 40,
        width: 100,
        height: 100
      })

      const group = new fabric.Group([text, rect], {
        left: 10,
        top: 10
      })

      this.card.add(group)
    })
  }

  render() {
    return (
      <div className="canvas">
        <canvas id="canvas" width="0" height="0" />
      </div>
    )
  }
}
