// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';


import {
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from '../actions';

const initialChoose = 'reactjs';

function selectedSubreddit( state = initialChoose, action) {
	switch(action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state;
	}
}

const initialPosts = Immutable.Map({
	isFetching: false,
	didInvalidate: false,
	items: Immutable.List()
})
function posts( state = initialPosts, action) {
	switch(action.type) {
		case INVALIDATE_SUBREDDIT:
			return state.set('didInvalidate', true);
			// return Object.assign({}, state, {
				// didInvalidate: true
			// });
		case REQUEST_POSTS: 
			return state.merge({isFetching: true, didInvalidate: false});
			// return {
				// ...state,
				// isFetching: true,
				// didInvalidate: false
			// };
		case RECEIVE_POSTS:
			return state.merge({
				isFetching: false,
				didInvalidate: false,
				items: Immutable.fromJS(action.posts),
				lastUpdate: action.reciveAt
			});
			// return {
			// 	...state,
			// 	isFetching: false,
			// 	didInvalidate: false,
			// 	items: action.posts,
			// 	lastUpdate: action.reciveAt
			// };
		default: 
			return state;
	}
}

const initialSubreddit = Immutable.Map();
function postsBySubreddit( state = initialSubreddit, action) {
	switch(action.type) {
		case INVALIDATE_SUBREDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return state.merge({
				[action.subreddit]: posts(state.get('action.subreddit'), action)
			});
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	postsBySubreddit,
	selectedSubreddit
})

export default rootReducer;