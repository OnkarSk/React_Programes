import React, { Component } from 'react'
import ComponentF from './ComponentF'

export class ComponentE extends Component {
	render() {
		return (
			<div>
				<ComponentF name={this.props.name}/>
			</div>
		)
	}
}

export default ComponentE
