import asyncLoad from './asyncLoad'

const routes = [{
  component: asyncLoad(() => import('../page')),
  path: '/',
  exact: true
}, {
  component: asyncLoad(() => import('../page/Page1')),
  path: '/page1',
}, {
  component: asyncLoad(() => import('../page/noData')),
}]

export default routes
