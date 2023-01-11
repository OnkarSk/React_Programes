import React, { useRef, useEffect } from 'react'

function FocusInput() {

	//this keayword and constructor avoid to use as this is not available in functional component
	//instead createRef in class component we use useRef hook in functional component

	const inputRef = useRef(null)
	
	const clickHandler = () => {
		console.log(inputRef.current)
		inputRef.current.focus()
	  }

	return (
		<div>
			<input type="text" />
			<input ref={inputRef} type="text" value="test"/>
			<button onClick={clickHandler}>Focus Input</button>
		</div>
	)
}

export default FocusInput
