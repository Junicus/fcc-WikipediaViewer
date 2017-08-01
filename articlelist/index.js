import React from 'react';
import { connect } from 'react-redux';
import { Article } from '../../components/article';
import './article-list.css';

const ArticleList = ({ dispatch, articles }) => {
	const { isFetching, data } = articles;
	if (data) {
		if (isFetching) {
			return (
				<div>Loading...</div>
			);
		} else {
			return (
				<ul>
					{
						Object.keys(data.query.pages).map(key => data.query.pages[key])
							.map((page) => (<Article key={page.pageid} {...page} />))
					}
				</ul>
			);
		}
	} else {
		return (<div></div>);
	}
}

function mapStateToProps(state) {
	const { articles } = state;
	return {
		articles
	};
}

export default connect(mapStateToProps)(ArticleList);
