import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
	render() {
		return (
			<UserConsumer>
				{username => {
					return <div>Hello {this.props.name} and {username}</div>
				}}
			</UserConsumer>
		)
	}
}

export default ComponentF
