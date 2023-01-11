import React from 'react'
import './App.css'
import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'
import Counter from './components/Counter'

function App() {
	return (
		<div className="App">
			<FocusInput /> {/* Example of Refs*/}
			{/* <ClassTimer />
			<HookTimer /> */}
			<Counter /> {/* Example of Memo*/}
		</div>
	)
}

export default App
