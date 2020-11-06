import React from 'react'
import ReactDOM from 'react-dom'

class Component extends React.Component {

  constructor(props) {
    super(props)

    this.contatoreRender = 0
    
    // setInterval(() => {
    //   this.contatoreRender += 1
    // }, 100)

    // setInterval(() => {
    //   this.forceUpdate()
    // }, 2000)

    // Esempio bind funzione.
    // this.aumentaContatore = this.aumentaContatore.bind(this)
  }

  aggiornaContatore(e, tipoAggiornamento) {
    if (tipoAggiornamento == 'add') {
      this.contatoreRender += 1
    } else if (tipoAggiornamento == 'remove') {
      this.contatoreRender -= 1
    }
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <h1>Render numero {this.contatoreRender}</h1>
        <button onClick={(e) => { this.aggiornaContatore(e, 'add') }}>Aumenta</button>
        <button onClick={(e) => { this.aggiornaContatore(e, 'remove') }}>Diminuisci</button>
      </div>
    )
  }

}

export default Component
