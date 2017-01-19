import React, { PropTypes, Component } from 'react';

export default class Posts extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.map((post, i) => <li key={i}>{post.title}</li>)
		return (
			<ul>
				{ postList }
			</ul>
		)
	}
}
Posts.propTypes = {
	posts: PropTypes.array
}