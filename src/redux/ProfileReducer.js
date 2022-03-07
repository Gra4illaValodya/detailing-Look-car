
export const ADD_NEW_POST = "ADD-NEW-POST";
export const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST";


const ProfileReducer = (state,action) => {
    switch (action.type) {
        case  ADD_NEW_POST :
            let newPost = {
                id: 5,
                postMessageItem: state.textareaText,
                postLikeItem: 0
            };
            state.postElementData.push(newPost);
            state.profilePage.textareaPost = '';
            return state

        case UPDATE_TEXTAREA_POST:
           state.profilePage.textareaPost = action.newPost;
            return state

        default: return state
    }
}

export const addNewPostActionCreator = () => {
    return ({type: 'ADD-NEW-POST'})
}
export const updateTextareaPostActionCreator = (postText) => {
    return ({type    : 'UPDATE-TEXTAREA-POST', newText : postText})
}

export default ProfileReducer
