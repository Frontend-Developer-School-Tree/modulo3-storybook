import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {

  constructor(props) {
    super(props)

    this.completeName = this.props.name + ' ' + this.props.surname
  }

  getCompleteName() {
    return this.props.name + ' ' + this.props.surname
  }

  render () {
    return (
      <div>
        <h2>{this.completeName}</h2>
        <h2>{this.getCompleteName()}</h2>
      </div>
    )
  }

}

// function ChildComponentFunc(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.subtitle}</p>
//     </div>
//   )
// }

class Component extends React.Component {

  constructor(props) {
    super(props)

    this.name = "Pippo"
    this.surname = "Baudo"

    setTimeout(() => {
      this.name = "Pippo"
      this.surname = "Inzaghi"
      this.forceUpdate()
    }, 2500)
  }

  render () {
    return (
      <div>
        <h1>Hello</h1>
        <ChildComponent name={this.name} surname={this.surname} />
      </div>
    )
  }

}

export default Component
