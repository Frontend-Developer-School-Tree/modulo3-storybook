import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempi di diversi casi d'uso delle props da evitare.
 */

// class CardComponentGood extends React.Component {

//   render () {
// 		return (
// 			<div className="card">
// 				<h1>{this.props.title}</h1>
// 				<p>{this.props.content}</p>
// 			</div>
// 		)
// 	}

// }

// class CardComponentBadDeps extends React.Component {

//   render () {
// 		const title = `${this.props.name} ${this.props.surname}`
// 		const content = `Biografia: ${this.props.bio} - Data di nascita: ${this.props.birthday}`

// 		return (
// 			<div className="card">
// 				<h1>{title}</h1>
// 				<p>{content}</p>
// 			</div>
// 		)
// 	}

// }

class CardComponentBadComplex extends React.Component {

  render () {
		const title = `${this.props.player.name} ${this.props.player.surname}`
		const content = `Biografia: ${this.props.player.informations.bio} - Data di nascita: ${this.props.player.birthday.data}`

		return (
			<div className="card">
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		)
	}

}

class Component extends React.Component {

  constructor(props) {
		super(props)
		
		this.player = {
			name: 'Pippo',
			surname: 'Inzaghi',
			birthday: {
				data: '9 agosto 1973',
				location: 'Piacenza'
			},
			informations: {
				bio: "È stato campione del mondo e vicecampione d'Europa con la nazionale italiana rispettivamente nel 2006 e nel 2000",
				features: "Attaccante puro, estremamente rapido, pur non essendo molto dotato tecnicamente,[16] era noto per la grande abilità nell'approfittare delle disattenzioni degli avversari e per il grande senso della posizione e fiuto del gol, doti che ne hanno fatto uno dei più prolifici attaccanti della sua generazione."
			}
		}
  }

  render () {
    return (
      <div>
				<CardComponentBadComplex 
					player={this.player}
				/>
				
				{/* <CardComponentBadDeps
					name={this.player.name}
					surname={this.player.surname}
					bio={this.player.informations.bio}
					birthday={this.player.birthday.data}
				/>

				<CardComponentGood
					title={`${this.player.name} ${this.player.surname}`}
					content={`Biografia: ${this.player.informations.bio} - Data di nascita: ${this.player.birthday.data}`}
				/> */}
      </div>
    )
  }

}

export default Component
