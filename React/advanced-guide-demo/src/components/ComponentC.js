import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
	render() {
		return (
			<div>
				<ComponentE name={this.props.name}/>
			</div>
		)
	}
}

export default ComponentC
