const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const initialState = {
	dialogsData: [
		{ userId: 1, name: "Dimych" },
		{ userId: 2, name: "Keanu" },
		{ userId: 3, name: "Voldemort" },
		{ userId: 4, name: "Aragorn" },
		{ userId: 5, name: "Popozoglo" },
	],
	messagesData: [
		{ id: 1, message: "Privet, krasavchik", owner: false },
		{ id: 2, message: "Cho, React uchish?", owner: true },
	],
};

const dialogReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let id = state.messagesData[state.messagesData.length - 1].id + 1;
			return {
				...state,
				messagesData: [
					{
						id: id,
						message: action.payload,
						owner: true
					},
					...state.messagesData
				],

			}
		default:
			return state;
	}

};

export const addMessage = (newText) => ({
	type: SEND_MESSAGE,
	payload: newText,
});

export default dialogReducer;