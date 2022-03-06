import messageItem from "../components/Dialogs/MessageItem/MessageItem";

export const ADD_NEW_POST = "ADD-NEW-POST";
export const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST";

export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_TEXTAREA_DIALOG = "UPDATE-TEXTAREA-DIALOG";





let store = {
    _state: {
        profilePage: {
            postElementData: [
                {id: 1, postMessageItem: "KYKYKY", postLikeItem: 0},
                {id: 2, postMessageItem: "What are you taking about me ??? ", postLikeItem: 22},
                {id: 3, postMessageItem: "YOYOYOYo ", postLikeItem: 65},
                {id: 4, postMessageItem: "llllll ", postLikeItem: 3},
            ],
            textareaPost: "New post"
        },

        dialogPage: {
            dialogElementData: [
                {id: 1, nameUserItem: "Vova"},
                {id: 2, nameUserItem: "Yulia"},
                {id: 3, nameUserItem: "Rulia"},
                {id: 4, nameUserItem: "Igor"},
            ],

            messageElementData: [
                {id: 1, messageItem: "Hi bro what up?"},
                {id: 2, messageItem: "Not bat.I hear you are mother fucker, yes?"},
                {id: 3, messageItem: "Yes bro I am fucking mother nigga"},
                {id: 4, messageItem: "YOYOYOYO"},
                {id: 5, messageItem: "bibby"}
            ],
            textareaDialog: ""
        },
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log("State change")
    },
    // updatePostText(postText) {
    //     store._state.profilePage.textareaPost = postText;
    //     this._rerenderEntireTree(this._state);
    // },
    // addMessage(messageText) {
    //     let newMessage = {
    //         id: 6,
    //         messageItem: messageText,
    //     }
    //     store._state.dialogPage.messageElementData.push(newMessage)
    // },
    // updateMessageText(messageText) {
    //     store._state.dialogPage.textareaDialog = messageText
    // },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                id: 5,
                postMessageItem: this._state.profilePage.textareaText,
                postLikeItem: 0
            };
            this._state.profilePage.postElementData.push(newPost);
            this._state.profilePage.textareaPost = '';
            this._rerenderEntireTree(this._state);
        }

        else if (action.type === UPDATE_TEXTAREA_POST) {
            store._state.profilePage.textareaPost = action.postText;
            this._rerenderEntireTree(this._state);
        }

        else if (action.type === SEND_MESSAGE) {
            let textareaDialog = this._state.dialogPage.textareaDialog
            let newMesage = {
                id : 6,
                messageItem: textareaDialog
            }
            this._state.dialogPage.textareaDialog = '';
            this._state.dialogPage.messageElementData.push(newMesage)
            this._rerenderEntireTree(this._state);
        }

        else if (action.type === UPDATE_TEXTAREA_DIALOG) {
            this._state.dialogPage.textareaDialog = action.text // зміємо state і я хочу сказати про це
            this._rerenderEntireTree(this._state);  // цією функцією я говорю всім що я змінюю і передаю йому новий state і хочу перемалювати весь світ

        }
    }
}



export const addNewPostActionCreator = () => {
    return ({type: 'ADD-NEW-POST'})
}
export const updateTextareaPostActionCreator = (postText) => {
    return ({type    : 'UPDATE-TEXTAREA-POST', newText : postText})
}


export const sendMessageActionCreator = () =>
    ({type: SEND_MESSAGE})

export const updateTextareaDialogActionCreator = (textareaDialog) =>
    ({type:UPDATE_TEXTAREA_DIALOG,
        textareaDialog: textareaDialog
    })



export default store
window.state = store
