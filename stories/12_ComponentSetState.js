import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempio base di utilizzo della funzione setState per realizzare una componente "Contatore".
 */

class Contatore extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			contatore: 0,
		}
	}

	aumentaContatore() {
		this.setState({ contatore: this.state.contatore + 1 }, () => {
			console.log(this.state.contatore) // -> 1
		})

		console.log(this.state.contatore) // -> 0
	}

  render () {
    return (
      <div>
        {/* ... */}
      </div>
    )
  }

}

export default Contatore
