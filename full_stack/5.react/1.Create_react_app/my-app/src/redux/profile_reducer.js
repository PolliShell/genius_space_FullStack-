const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState={
    posts: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How are u?", likesCount: 11},
        {id: 3, message: "Yo!", likesCount: 13}
    ],
    newPostText: "it-kamas"
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    // return state;
}

export const addPostActionCreator=()=>{
    return{
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator=(text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT, newText: text
    }
}
export default profileReducer;