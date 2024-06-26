const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState={
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"}
    ],
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator=()=>{
    return{
        type:SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator=(body)=>{
    return{
        type:UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;