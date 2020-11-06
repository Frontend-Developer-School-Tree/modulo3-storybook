import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {

  render () {
    return <div style={{ backgroundColor: 'green', color: 'white', padding: 15 }}>
      {this.props.children}
    </div>
  }

}

class Component extends React.Component {

  render () {
    return (
      <div>
        <ChildComponent>
          <h1>Hello World</h1>
        </ChildComponent>
      </div>
    )
  }

}

export default Component
