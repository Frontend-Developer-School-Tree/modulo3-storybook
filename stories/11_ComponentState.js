import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Esempio base di utilizzo dello state.
 */

class Component extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			key1: 'value1',
			key2: 'value2',
			// ...
		}
	}

  render () {
    return (
      <div>
        {/* ... */}
      </div>
    )
  }

}

export default Component
