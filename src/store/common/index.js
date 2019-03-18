import { observable, action } from 'mobx'

class Store {
  @observable count = 1

  @action add = price => {
    this.count += price
  }
}

const storesA = new Store()

export default storesA
