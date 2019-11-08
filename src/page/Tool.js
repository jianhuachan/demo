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
    <button type="button" onClick={() => props.history.push('testMaxNumber')}>
      maxNumber
    </button>
    <button type="button" onClick={() => props.history.push('fabric')}>
      fabric
    </button>
    <button type="button" onClick={() => props.history.push('fabricTest')}>
      fabricTest
    </button>
    <button type="button" onClick={() => props.history.push('simpleDrag')}>
      simpleDrag
    </button>
    <button type="button" onClick={() => props.history.push('JestTest')}>
      JestTest
    </button>
  </div>
)

Tool.propTypes = {
  history: PropTypes.object.isRequired
}

export default Tool
