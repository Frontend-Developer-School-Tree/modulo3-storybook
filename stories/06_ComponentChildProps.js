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
    return <h2>{this.completeName}</h2>
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

  render () {
    return (
      <div>
        <h1>Hello</h1>
        <ChildComponent name='Pippo' surname='Baudo' />
        <ChildComponent name='Simone' />
      </div>
    )
  }

}

export default Component
