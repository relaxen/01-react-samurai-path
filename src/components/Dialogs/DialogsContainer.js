import {sendMessageActionCreator, updateMessageActionCreator} from "../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = () => {

    //let state = props.store.getState();

    return (
        <StoreContext.Consumer>{
            (store) => {

                let addMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onChangeMessage = (newMessageText) => {
                    let action = updateMessageActionCreator(newMessageText);
                    store.dispatch(action);
                }

                return <Dialogs onChangeMessage={onChangeMessage} addMessage={addMessage}
                                dialogs={store.getState().dialogsPage.dialogsData}
                                messages={store.getState().dialogsPage.messagesData}
                                tempText={store.getState().dialogsPage.newMessageTemp}/>
            }
        }
        </StoreContext.Consumer>

    )
}*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        tempText: state.dialogsPage.newMessageTemp,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (newMessageText) => {
            dispatch(updateMessageActionCreator(newMessageText));
        },
        addMessage: () => {
            dispatch(sendMessageActionCreator());
        },

    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;