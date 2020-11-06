import React from 'react'
import ReactDOM from 'react-dom'
import ChildComponent from './ChildComponent'

class Component extends React.Component {

  render () {
    if (!this.renderCounter) this.renderCounter = 0
    this.renderCounter += 1

    return (
      <div>
        <h1>Esecuzione render {this.renderCounter}</h1>
        <ChildComponent/>
      </div>
    )
  }

}

export default Component
