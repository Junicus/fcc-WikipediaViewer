import React from 'react';
import './searchbox.css';

export class SearchBox extends React.Component {
	render() {
		const { changeHandler, searchHandler } = this.props;
		return (
			<div className="searchbox">
				<input className="searchbox-input" type="text" onChange={changeHandler} />
				<button className="searchbox-button" onClick={searchHandler}>Search</button>
			</div>);
	}
}
