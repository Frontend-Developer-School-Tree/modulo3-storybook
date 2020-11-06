import React from 'react'
import ReactDOM from 'react-dom'
import ChildComponent from './ChildComponent'

class Component extends React.Component {

  render () {
    return (
      <div>
        <h1>Hello pippo</h1>
        <ChildComponent />
      </div>
    )
  }

}

export default Component
