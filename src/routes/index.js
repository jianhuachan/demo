import asyncLoad from './asyncLoad'

const routes = [{
  component: asyncLoad(() => import('../page')),
  path: '/',
  exact: true
}, {
  component: asyncLoad(() => import('../page/Page1')),
  path: '/page1',
}, {
  component: asyncLoad(() => import('../page/testMaxNumber')),
  path: '/testMaxNumber',
}, {
  component: asyncLoad(() => import('../page/Fabric')),
  path: '/fabric',
}, {
  component: asyncLoad(() => import('../page/SimpleDrag')),
  path: '/simpleDrag'
}, {
  component: asyncLoad(() => import('../page/FabricTest')),
  path: '/fabricTest'
}, {
  component: asyncLoad(() => import('../page/noData')),
}]

export default routes
