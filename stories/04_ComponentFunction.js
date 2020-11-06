import React from 'react'
import ReactDOM from 'react-dom'

class Component extends React.Component {

  renderNumber (n, index) {
    return <li key={index}>Numero {n} - Indice {index}</li>
  }

  renderList(lista) {
    return (
      <ul>
        {lista.map(this.renderNumber)}
      </ul>
    )
  }

  renderTitle(titolo) {
    return <h1>{titolo}</h1>
  }

  render () {
    const numbers = [1,2,3,4,8, 6, 7, 8, 9]

    return (
      <div>
        {this.renderTitle('I miei numeri')}
        {this.renderList(numbers)}
      </div>
    )
  }

}

export default Component
