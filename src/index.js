// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_KEY from './API_KEY';


// Create a new component to produce HTML
// const App = function () {
// 	return <div>Hi!</div>;
// }

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// class App extends React.createComponent {
// 	render() {
// 		return <div>Hi!</div>
// 	}
// }

// Need component to be inserted into DOM
ReactDOM.render(<App />, document.getElementById('app-container'));
// ReactDOM.render(<App />, document.querySelector('container'));