const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    usersData: [],
		pageSize: 5,
		totalUsersCount: 20,
		currentPage:1,
		isFetching: false,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => user.id === action.payload ? {
                    ...user,
                    followed: !user.followed
                } : {...user})

            }
        case SET_USERS: {
            return {
                ...state, usersData: action.payload
            }
        }
				case SET_CURRENT_PAGE: {
					return {
							...state,
							currentPage:action.payload,
					}
				}
				case SET_TOTAL_COUNT: {
					return {
							...state,
							totalUsersCount:action.payload,
					}
				}
				case TOGGLE_IS_FETCHING: {
					return {
							...state,
							isFetching: action.payload,
					}
				}
				default:
						return state;
    }
};

export const setCurrentPage = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	payload: pageNumber,
});

export const follow = (userId) => ({
    type: FOLLOW,
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


export default usersReducer;