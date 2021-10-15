import { usersAPI } from "../api/api";
const SET_FOLLOW = 'SET-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

const initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
	isFetching: false,
	isFollowing: [],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(user => user.id === action.payload ? {
					...user,
					followed: !user.followed
				} : { ...user })
			}
		case SET_USERS: {
			return {
				...state, usersData: action.payload
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.payload,
			}
		}
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalUsersCount: action.payload,
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.payload,
			}
		}
		case TOGGLE_IS_FOLLOWING: {
			return {
				...state,
				isFollowing: state.isFollowing.some(id => id === action.payload) ? state.isFollowing.filter(userId => userId !== action.payload) : [...state.isFollowing, action.payload],
			}
		}
		default:
			return state;
	}
};

//Action Creators

export const setCurrentPage = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	payload: pageNumber,
});

export const setFollowed = (userId) => ({
	type: SET_FOLLOW,
	payload: userId,
});

export const setUsers = (users) => ({
	type: SET_USERS,
	payload: users,
});
export const setTotalCount = (totalCount) => ({
	type: SET_TOTAL_COUNT,
	payload: totalCount,
});
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	payload: isFetching,
});
export const toggleIsFollowing = (userId) => ({
	type: TOGGLE_IS_FOLLOWING,
	payload: userId,
});

//Thunk Creators

export const getUsers = (pageSize, currentPage) => {

	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(pageSize, currentPage)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalCount(data.totalCount));
				dispatch(setCurrentPage(currentPage));
				dispatch(toggleIsFetching(false));
			});

	}
};

export const following = (userId, following = true) => {

	return (dispatch) => {
		dispatch(toggleIsFollowing(userId));
		usersAPI.followUser(userId, following).then((data) => {
			if (data.resultCode === 0) {
				dispatch(setFollowed(userId));
			}
			dispatch(toggleIsFollowing(userId));
		});
	}
};

export default usersReducer;