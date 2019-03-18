import React from 'react'
import Spinner from 'react-spinkit'
import styles from './loading.module.less'

const Loading = () => (
  <div className={styles.loading}>
    <Spinner name="circle" color="green" />
  </div>
)

export default Loading
