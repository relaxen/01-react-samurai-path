import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


const initialState = {

	PostsData: [
		{ id: 3, message: "So far far away...", likesCount: 999 },
		{ id: 2, message: "Hey, glad to see you!", likesCount: 18 },
		{ id: 1, message: "It`s my first post!!!", likesCount: 5 },
	],
	profile: {
		userId: '',
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		contacts: {
			github: '',
			vk: '',
			facebook: '',
			instagram: '',
			twitter: '',
			website: '',
			youtube: '',
			mainLink: '',
		},
		photos: {
			small: "",
			large: "",
		},
	},

};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let id = state.PostsData[0].id + 1;
			return {
				...state,
				PostsData: [
					{
						id: id,
						likesCount: 0,
						message: action.payload,
					},
					...state.PostsData,
				],
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.payload,
			}
		case SET_USER_STATUS:
			return {
				...state,
				status: action.payload,
			}
		default:
			return state;
	}
};

//Action Creators

export const addPost = (postText) => ({
	type: ADD_POST,
	payload: postText
});
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	payload: profile,
});
export const setUserStatus = (status) => ({
	type: SET_USER_STATUS,
	payload: status,
});

//Thunk Creators

export const showUserProfile = (userId) => {

	return (dispatch) => {
		profileAPI.getProfile(userId).then((data) => {
			dispatch(setUserProfile(data));
		});
	}
};

export const getUserStatus = (userId) => {

	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setUserStatus(data));
		});
	}
};

export const updateUserStatus = (status) => {

	return (dispatch) => {
		profileAPI.updateStatus(status).then((data) => {
			if (data.resultCode === 0) {
				dispatch(setUserStatus(status));
			}

		});
	}
};


export default profileReducer;