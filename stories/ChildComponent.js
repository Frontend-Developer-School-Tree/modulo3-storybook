import React from 'react'
import ReactDOM from 'react-dom'

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

    return <h2>Esecuzione render child {this.renderCounterChild} | {this.renderCounterChild % 2 == 0 ? 'La centrale sta esplodendo' : 'Lancentrale non sta espodendo'}</h2>
  }

}

export default ChildComponent