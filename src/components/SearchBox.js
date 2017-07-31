import React from 'react';

export class SearchBox extends React.Component {
	render() {
		const { changeHandler, searchHandler } = this.props;
		return (
			<div>
				<input type="text" onChange={changeHandler} />
				<button onClick={searchHandler}>Search</button>
			</div>);
	}
}
