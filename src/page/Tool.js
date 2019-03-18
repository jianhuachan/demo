import React from 'react'
import PropTypes from 'prop-types'

const Tool = props => (
  <div>
    <button type="button" onClick={() => props.history.push('/')}>
      首页
    </button>
    <button type="button" onClick={() => props.history.push('page1')}>
      分页1
    </button>
  </div>
)

Tool.propTypes = {
  history: PropTypes.object.isRequired
}

export default Tool
