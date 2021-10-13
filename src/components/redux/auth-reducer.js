const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		case SET_AUTH:
			return {
				...state,
				isAuth: true,
			}
		default:
			return state;
	}
};

export const setAuthUserData = (userAuthData) => ({
	type: SET_USER_DATA,
	payload: userAuthData,
});

export const setAuth = () => ({
	type: SET_AUTH,
});


export default authReducer;