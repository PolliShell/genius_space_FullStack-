import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";

// const DialogItem =(props)=>{
//     let path = "/dialogs/"+props.id;
//     return(
//         <div className={s.dialog + " " + s.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }

// const Message = (props)=>{
//    return <div className={s.dialog}>{props.message}</div>
// }
const Dialogs = (props) => {
let dialogs = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are u?"},
    {id: 3, message: "Yo!"}
]

let dialogsElements = dialogs
    .map(dialog => {
        <DialogItem name={dialog.name} id={dialog.id}/>
    })

let messagesElements = messages.map(message =>
    <Message message={messages.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
                {/*<DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messages}>
                    {/*<Message message={messages[0].message}/>*/}
                    {/*<Message message={messages[1].message}/>*/}
                    {/*<Message message={messages[2].message}/>*/}
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;