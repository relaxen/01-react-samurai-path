const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

const initialState = {
    usersData: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => user.userId == action.payload ? {
                    ...user,
                    followed: !user.followed
                } : {...user})

            }
        case SET_USERS: {
            return {
                ...state, usersData: [...state.usersData, ...action.payload]
            }
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({
    type: FOLLOW,
    payload: userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    payload: users,
});


export default usersReducer;