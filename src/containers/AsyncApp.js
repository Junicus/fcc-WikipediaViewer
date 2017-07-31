import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';

class AsyncApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleTopicChange = this.handleTopicChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleTopicChange(topic) {
	}

	handleSearchClick(e) {
		e.preventDefault();
		console.log('click');
	}

	render() {
		return (
			<div>
				<SearchBox searchHanlder={this.handleSearchClick} />
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
