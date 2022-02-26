let rerenderEntireTree = () => {
    console.log("State change")
}



const state = {
    profilePage: {
        postElementData: [
            {id: 1, postMessageItem: "KYKYKY", postLikeItem: 0},
            {id: 2, postMessageItem: "What are you taking about me ??? ", postLikeItem: 22},
            {id: 3, postMessageItem: "YOYOYOYo ", postLikeItem: 65},
            {id: 4, postMessageItem: "llllll ", postLikeItem: 3},
        ],
        textareaText: "Valodia Zalypka"
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
    }
}



window.state = state

export let updatePostText = (postText) => {
    state.profilePage.textareaText = postText
    rerenderEntireTree()
}
export let updateMessageText = (messageText) => {
    state.dialogPage.textareaText = messageText
    rerenderEntireTree()
}

export let addMessage = (messageText) => {
    debugger
    let newMessage = {
        id: 6,
        messageItem: messageText,
    }
    state.dialogPage.messageElementData.push(newMessage)

    rerenderEntireTree()

}

export let addNewPost = () => {
    let newPost = {
        id: 5,
        postMessageItem: state.profilePage.textareaText,
        postLikeItem: 0
    };
    state.profilePage.postElementData.push(newPost);
    state.profilePage.textareaText = ''
    rerenderEntireTree()

}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state
