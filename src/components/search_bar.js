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
			<div className='search-bar'>
				<input 
				value={this.state.term}
				onChange={ (e) => this.handleInputChange(e.target.value) } />
			</div>
		);
		
		// return <input onChange={(e) => console.log(e.target.value)} />;
		// <input onChange={this._handleInputChange} />
	}

	handleInputChange (term) {
		this.setState({ term: term });
		this.props.onSearchTermChange(term);
	}

	// _handleInputChange (e) {
	// 	// e.preventDefault();
	// 	// console.log(e.target.value);
	// 	this.setState({
	// 		term: e.target.value
	// 	});
	// }
}

// module.exports(SearchBar);
export default SearchBar;