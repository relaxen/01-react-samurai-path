import { usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {

    PostsData: [
        {id: 3, message: "So far far away...", likesCount: 999},
        {id: 2, message: "Hey, glad to see you!", likesCount: 18},
        {id: 1, message: "It`s my first post!!!", likesCount: 5},
    ],
    newPostTemp: "",
		profile:{
			userId:'',
			lookingForAJob: false,
			lookingForAJobDescription: '',
			fullName: '',
			contacts: {
				github: '',
				vk:'',
				facebook:'',
				instagram:'',
				twitter: '',
				website: '',
				youtube: '',
				mainLink: '',
			},
			photos:{
				small:"",
				large:"",
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
                        message: state.newPostTemp,
                    },
                    ...state.PostsData,
                ],
                newPostTemp: "",
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostTemp: action.payload,
            }
				case SET_USER_PROFILE:
					return{
						...state,
						profile:action.payload,
					}
        default:
            return state;
    }
};

//Action Creators

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (newText) => ({
        type: UPDATE_NEW_POST_TEXT,
        payload: newText,
    });
export const setUserProfile = (profile) =>({
	type: SET_USER_PROFILE,
	payload: profile,
});

//Thunk Creators

export const showUserProfile = (userId) => {

	return (dispatch) => {
		usersAPI.getProfile(userId).then((data) => {
			dispatch(setUserProfile(data));
		});
	}
};

export default profileReducer;