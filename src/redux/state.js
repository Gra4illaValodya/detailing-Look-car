let store = {
        _state: {
            profilePage: {
                postElementData: [
                    {id: 1, postMessageItem: "KYKYKY", postLikeItem: 0},
                    {id: 2, postMessageItem: "What are you taking about me ??? ", postLikeItem: 22},
                    {id: 3, postMessageItem: "YOYOYOYo ", postLikeItem: 65},
                    {id: 4, postMessageItem: "llllll ", postLikeItem: 3},
                ],
                textareaText: "New post"
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
                textareaText: "Вводите сообщение..."
            },
        },
    getState(){
            return this._state
    },
        _rerenderEntireTree(){
            console.log("State change")
        },
    _addNewPost() {
        let newPost = {
            id: 5,
            postMessageItem: this._state.profilePage.textareaText,
            postLikeItem: 0
        };
        this._state.profilePage.postElementData.push(newPost);
        this._state.profilePage.textareaText = '';
        this._rerenderEntireTree(this._state);

    },
    _updatePostText(postText) {
        store._state.profilePage.textareaText = postText;
       this._rerenderEntireTree(this._state);
    },

        addMessage(messageText) {
            let newMessage = {
                id: 6,
                messageItem: messageText,
            }
            store._state.dialogPage.messageElementData.push(newMessage)
        },

    updateMessageText(messageText) {
        store._state.dialogPage.textareaText = messageText
        },

    subscribe (observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
            if(action.type === "ADD-NEW-POST"){
                this._addNewPost()
            }else if (action.type === "UPDATE-POST-TEXT"){
               this._updatePostText()
            }
    }
    }



export default store
window.state = store
