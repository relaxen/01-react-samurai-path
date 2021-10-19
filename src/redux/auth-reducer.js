import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';
const SET_NOT_AUTH = 'SET-NOT-AUTH';

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
		case SET_NOT_AUTH:
			return {
				...state,
				isAuth: false,
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

export const setNotAuth = () => ({
	type: SET_NOT_AUTH,
});

//Thunk Creators

export const getMyAuthData = () => {
	return (dispatch) => {
		authAPI.getAuthProfile().then(response => {
			if (response.resultCode === 0) {
				dispatch(setAuthUserData(response.data));
				dispatch(setAuth());
			}
		})
	}
};

export const login = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe).then(response => {
			if (response.resultCode === 0) {
				dispatch(getMyAuthData());
			}
		})
	}
};

export const logout = () => {
	return (dispatch) => {
		authAPI.logout().then(response => {
			if (response.resultCode === 0) {
				dispatch(setAuthUserData({
					id: null,
					email: null,
					login: null,
				}));
				dispatch(setNotAuth());
			}
		})
	}
};

export default authReducer;