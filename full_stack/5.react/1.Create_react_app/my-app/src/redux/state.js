import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";

let rerenderEntireTree = () => {
    console.log("State change")
}
let store = {
    getState() {
        return this._state;
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 12},
                {id: 2, message: "How are u?", likesCount: 11},
                {id: 3, message: "Yo!", likesCount: 13}
            ],
            newPostText: "it-kamas"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are u?"},
                {id: 3, message: "Yo!"}
            ],
            newMessageBody:[

            ]
        }
    },
    _callSubscriber() {
        console.log("State change")
    },
    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state)
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.profilePage,action);

        this._callSubscriber(this._state);
    }
}
// export const addPostActionCreator=()=>{
//     return{
//         type:ADD_POST
//     }
// }
// export const updateNewPostTextActionCreator=(text)=>{
//     return{
//         type:UPDATE_NEW_POST_TEXT, newText: text
//     }
// }
// export const sendMessageCreator=()=>{
//     return{
//         type:SEND_MESSAGE
//     }
// }
// export const updateNewMessageBodyCreator=(body)=>{
//     return{
//         type:UPDATE_NEW_MESSAGE_BODY, body: body
//     }
// }


export default store;