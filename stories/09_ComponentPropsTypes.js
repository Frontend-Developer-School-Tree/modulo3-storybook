import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempi di diverse tipologie di props.
 */

class ChildComponent extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.propsString}</li>
				</ul>
			</div>
		)
	}
}

class Component extends React.Component {

  render () {
    return (
      <div>
				<ChildComponent
					propsString='Hello World'
					/* ... */
				/>
      </div>
    )
  }

}

export default Component
