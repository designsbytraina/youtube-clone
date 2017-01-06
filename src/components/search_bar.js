import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;
// }

class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			term: '' 
		};
	}

	render () {
		return (
			<div>
				<input onChange={(e) => this.setState({term: e.target.value})} />
				Value of the input: {this.state.term}
			</div>
		);
		
		// return <input onChange={(e) => console.log(e.target.value)} />;
		// <input onChange={this._handleInputChange} />
	}

	_handleInputChange (e) {
		// e.preventDefault();
		// console.log(e.target.value);
		this.setState({
			term: e.target.value
		});
	}
}

// module.exports(SearchBar);
export default SearchBar;