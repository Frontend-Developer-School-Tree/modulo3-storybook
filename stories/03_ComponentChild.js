import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempio utilizzo di componenti all'iterno di altre componenti.
 */

class ChildComponent extends React.Component {

  constructor(props) {
    super(props)

    setInterval(() => {
      this.forceUpdate()
    }, 1000)
  }

  render () {
    if (!this.renderCounterChild) this.renderCounterChild = 0
    this.renderCounterChild += 1

    return <h2>Esecuzione render child {this.renderCounterChild}</h2>
  }

}

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
