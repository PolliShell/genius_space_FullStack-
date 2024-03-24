import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = props.state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    ));

    let messagesElements = props.state.messages.map(message => (
        <Message message={message.message} key={message.id}/>
    ));

    let newMessageBody = props.state.newMessageBody;
    let newMessage = React.createRef();


    let addNewMessage = () => {
        let message = newMessage.current.value;

        alert(message);
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}></button>
                    </div>
                </div>
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addNewMessage}>add new message</button>
            </div>

        </div>
    );
}

export default Dialogs;