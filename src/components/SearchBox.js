import React from 'react';

export class SearchBox extends React.Component {
	render() {
		return (
			<div>
				<input type="text" />
				<button onClick={this.props.searchHandler}>Search</button>
			</div>);
	}
}
