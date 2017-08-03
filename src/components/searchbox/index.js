import React from 'react';
import './searchbox.css';

export class SearchBox extends React.Component {
	render() {
		const { changeHandler, searchHandler } = this.props;
		return (
			<div className="searchbox-outer">
				<div style={{
					width: '150px'
				}}>
					<a href="https://www.github.com/junicus/fcc-WikipediaViewer" target="_blanck" style={
						{
							margin: '5px',
							textDecoration: 'none',
							color: 'white'
						}
					}>Source on Github</a>
				</div>
				<div className="searchbox">
					<input className="searchbox-input" type="text" onChange={changeHandler} />
					<a href="#" className="searchbox-button" onClick={searchHandler}>Search</a>
					<a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" className="searchbox-button">Random</a>
				</div>
			</div>);
	}
}
