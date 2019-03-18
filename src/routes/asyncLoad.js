import loadable from 'react-loadable'
import Loading from '../common/loading'

const asyncLoad = loader =>
  loadable({
    loader,
    loading: Loading,
    delay: 100, // 异步加载时间超过100ms时加loading
    timeout: 30000, // 加载超时时间设置：30s
  })

export default asyncLoad
