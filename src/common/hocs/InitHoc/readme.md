### 功能说明

初始化
data 为获取到的数据
isLoading 未获取到数据是加载的图片

### 使用

支持装饰器引入 如:

```
import React, { Component } from 'react'
import InitHoc from 'common/hocs/InitHoc'

@InitHoc
class Comp extends Component {

  render() {
    console.log(this.props) // 此处可获取InitHoc传来的数据
    return <div />
  }
}
```
