import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempio utilizzo del this nelle funzioni e utilizzo del bind.
 */

class Component extends React.Component {

  constructor(props) {
    super(props)

    this.contatoreRender = 0

    this.aggiornaContatoreConBind = this.aggiornaContatoreConBind.bind(this)
  }
  
  aggiornaContatoreStandard(e) {
    this.contatoreRender += 1
    this.forceUpdate()
  }

  aggiornaContatoreConBind(e) {
    this.contatoreRender += 1
    this.forceUpdate()
  }

  aggiornaContatoreArrowFunction = (e) => {
    this.contatoreRender += 1
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <h1>Render numero {this.contatoreRender}</h1>

        <button onClick={this.aggiornaContatoreConBind}>Aggiorna contatore con bind</button>
        <button onClick={this.aggiornaContatoreArrowFunction}>Aggiorna contatore con arrow function</button>

        <button onClick={this.aggiornaContatoreStandard}>Aggiorna contatore standard NON FUNZIONANTE</button>
        <button onClick={(e) => this.aggiornaContatoreStandard(e)}>Aggiorna contatore standard FUNZIONANTE</button>
      </div>
    )
  }

}

export default Component
