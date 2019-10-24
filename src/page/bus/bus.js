import {
  EventEmitter
} from 'events'

const bus = {
  ...EventEmitter.prototype
}

export default bus
