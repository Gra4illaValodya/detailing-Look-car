import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updateMessageText, updatePostText} from "./redux/state"
import {addMessage} from "./redux/state";



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={state}
                 addMessage={addMessage}
                 addNewPost={addNewPost}
                 updatePostText={updatePostText}
                 updateMessageText={updateMessageText}></App>

        </React.StrictMode>,
        document.getElementById('root')
    );

}

