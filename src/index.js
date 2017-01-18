// var React = require('react');
// var ReactDOM = require('react-dom');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './API_KEY';


// Create a new component to produce HTML

class App extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('cats');
	}

	// componentWillMount () {

	// }

	videoSearch (term) {
		YTSearch( {key: API_KEY, term: term}, (data) => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			});
			// this.setstate({videos: videos});
			// this.setstate({videos});

			console.log(data);
		});
	}

	render () {
		return (
			<div>
				<SearchBar onSearchTermChange={ (term) => this.videoSearch(term) }/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={ (video) => this.setState({ selectedVideo: video }) }
				videos={this.state.videos} />
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