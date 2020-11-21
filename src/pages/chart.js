import React, { Component } from 'react'

import ReactStoreIndicator from 'react-score-indicator'

class Example extends Component {
  render () {
    return (
      <>
      <ReactStoreIndicator
        value={80}
        maxValue={100}
      />
      <h2>HTML</h2>
      </>
    )
  }
}
export default Example