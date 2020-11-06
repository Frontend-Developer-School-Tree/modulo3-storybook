import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {

  changeStatusBad = () => {
    this.props.label = 'Active' // Cosa brutta da non fare mai
  }

  render () {
    return (
      <div>
        {this.props.label}
        <button onClick={this.changeStatusBad}>Change status</button>
      </div>
    )
  }

}

class Component extends React.Component {

  constructor(props) {
    super(props)

    this.label = 'Inactive'
  }

  changeStatusGood = () => {
    this.label = 'Active'
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <ChildComponent
          label={this.label}
          changeStatus={this.changeStatusGood}
        />
      </div>
    )
  }

}

export default Component
