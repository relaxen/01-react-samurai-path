const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {

    PostsData: [
        {id: 3, message: "So far far away...", likesCount: 999},
        {id: 2, message: "Hey, glad to see you!", likesCount: 18},
        {id: 1, message: "It`s my first post!!!", likesCount: 5},
    ],
    newPostTemp: "",

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
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (newText) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        payload: newText,
    });

export default profileReducer;