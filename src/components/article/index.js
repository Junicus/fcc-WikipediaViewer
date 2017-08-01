import React from 'react';
import './article.css';

export class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	render() {
		console.log(this.props);
		const { title, extract, fullurl } = this.props;
		const { isExpanded } = this.state;
		let createMarkup = () => { return { __html: extract } };
		console.log(createMarkup());
		return (
			<li>
				<article className="article">
					<header className="article-title">{title}</header>
					{
						(isExpanded) ? <div dangerouslySetInnerHTML={createMarkup()}
							className="article-content" /> : null
					}
					<footer className="article-footer">
						<a href="#" onClick={this.handleClick}>
							{
								isExpanded ? 'Collapse' : 'Expand'
							}
						</a>
						<a href={fullurl} target="_blank">Open Wiki</a>
					</footer>
				</article>
			</li>
		);
	}
}
