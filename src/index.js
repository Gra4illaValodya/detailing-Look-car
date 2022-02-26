
import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updateMessageText, updatePostText} from "./redux/state"
import {addMessage} from "./redux/state";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={state}
                 addMessage={addMessage}
                 addNewPost={addNewPost}
                 updatePostText={updatePostText}
                 updateMessageText={updateMessageText}>

            </App>

        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)



// https://meet.google.com/jnu-qkka-sgz