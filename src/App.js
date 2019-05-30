import React from 'react'
import './App.css'
import ServiceList from './components/ServiceList'
import Header from './components/Header'

function App() {
	return (
		<div className="App container-fluid">
			<Header />
			<div className=" container-fluid">
				<ServiceList />
			</div>
		</div>
	)
}

export default App
