import { observable, action } from 'mobx'
// import { observer } from 'mobx-react'


// @observer
class Store {
  @observable count = 1

  @action add = () => {
    this.count += 1
  }
}

const stores = new Store()

export default stores
