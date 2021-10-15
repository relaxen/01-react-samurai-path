const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const initialState = {
    dialogsData: [
        {userId: 1, name: "Dimych"},
        {userId: 2, name: "Keanu"},
        {userId: 3, name: "Voldemort"},
        {userId: 4, name: "Aragorn"},
        {userId: 5, name: "Popozoglo"},
    ],
    messagesData: [
        {id: 1, message: "Privet, krasavchik", owner: false},
        {id: 2, message: "Cho, React uchish?", owner: true},
    ],
    newMessageTemp: "",
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let id = state.messagesData[state.messagesData.length - 1].id + 1;
            return {
                ...state,
                newMessageTemp: "",
                messagesData: [
                    ...state.messagesData,
                    {
                        id: id,
                        message: state.newMessageTemp,
                        owner: true
                    }
                ],

            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageTemp: action.payload,
            }
        default:
            return state;
    }

};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageActionCreator = (newText) => (
    {
        type: UPDATE_MESSAGE_TEXT,
        payload: newText,
    });

export default dialogReducer;