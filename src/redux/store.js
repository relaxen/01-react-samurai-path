import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
    _state: {
        profilePage: {
            PostsData: [
                {id: 1, message: "It`s my first post!!!", likesCount: 5},
                {id: 2, message: "Hey, glad to see you!", likesCount: 18},
                {id: 3, message: "So far far away...", likesCount: 999},
                {id: 4, message: "Coolest things for learning fast", likesCount: 1000},
                {id: 5, message: "chokavo", likesCount: 1000},
            ],
            newPostTemp: "",
        },
        dialogsPage: {
            dialogsData: [
                {userId: 1, name: "Dimych"},
                {userId: 2, name: "Keanu"},
                {userId: 3, name: "Voldemort"},
                {userId: 4, name: "Aragorn"},
                {userId: 5, name: "Popozoglo"},
            ],
            messagesData: [
                {id: 1, message: "Privet, krasavchik", right: false},
                {id: 2, message: "Cho, React uchish?", right: true},
                {id: 3, message: "Ahooet' konechno tut things proishodyat", right: false},
            ],
            newMessageTemp: "",
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },


    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель - паттерн observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageActionCreator = (newText) => (
    {
        type: UPDATE_MESSAGE_TEXT,
        payload: newText,
    });

export default store;