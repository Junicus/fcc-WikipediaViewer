import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';
import { setTopic, fetchArticles } from '../actions';

class AsyncApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleTopicChange = this.handleTopicChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleTopicChange(e) {
		const { dispatch } = this.props;
		dispatch(setTopic(e.target.value));
	}

	handleSearchClick(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		const { topic } = this.props.search;
		dispatch(fetchArticles(topic));
	}

	render() {
		return (
			<div>
				<SearchBox changeHandler={this.handleTopicChange} searchHandler={this.handleSearchClick} />
			</div>);
	}
}

function mapStateToProps(state) {
	const { search, autocomplete, articles } = state;
	return {
		search,
		autocomplete,
		articles
	};
}

export default connect(mapStateToProps)(AsyncApp);
