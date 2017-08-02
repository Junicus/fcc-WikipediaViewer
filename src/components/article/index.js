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
		const { title, extract, fullurl, thumbnail } = this.props;
		const { isExpanded } = this.state;
		let createMarkup = () => { return { __html: extract } };
		console.log(createMarkup());
		return (
			<li>
				<article className="article">
					<header className="article-title">{title}</header>
					<div className="article-content">
						{
							(thumbnail && isExpanded) ? <div className="article-content-thumbnail"><img src={thumbnail.source} /></div> : null
						}
						{
							(isExpanded) ? <div dangerouslySetInnerHTML={createMarkup()}
								className="article-content-extract" /> : null
						}
					</div>
					<footer className="article-footer">
						<a href="#" onClick={this.handleClick} className="article-footer-command">
							{
								isExpanded ? 'Collapse' : 'Expand'
							}
						</a>
						<a href={fullurl} target="_blank" className="article-footer-command">Open Wiki</a>
					</footer>
				</article>
			</li>
		);
	}
}
