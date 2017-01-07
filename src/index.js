// var React = require('react');
// var ReactDOM = require('react-dom');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import API_KEY from './API_KEY';


// Create a new component to produce HTML

class App extends Component {
	constructor (props) {
		super(props);

		this.state = { videos: [] };

		YTSearch( {key: API_KEY, term: 'cats'}, (data) => {
			this.setState({
				videos: data
			});
			// this.setstate({videos: videos});
			// this.setstate({videos});

			console.log(data);
		});
	}

	render () {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// in functional components, props are arguments
// in class based components, props are available anywhere in any method we define as this.props

// const App = function () {
// 	return <div>Hi!</div>;
// }

// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// class App extends React.createComponent {
// 	render() {
// 		return <div>Hi!</div>
// 	}
// }

// Need component to be inserted into DOM
ReactDOM.render(<App />, document.getElementById('app-container'));
// ReactDOM.render(<App />, document.querySelector('container'));