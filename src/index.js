
import './index.css';
import store from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let rerenderEntireTree = (_state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={store.getState()}
                 //addMessage={store.addMessage.bind(store)}// бінд не визиває функцію ,він бере функцію addNewPost  звязує з store, і метод bind повертає іншу функцію така сама як і addNewPost але всередині this буде  store
                 dispatch={store.dispatch.bind(store)}>
            </App>

        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState()); // тут ми не біндуємо бо визиваємо  getState від іменні store
store.subscribe(rerenderEntireTree)



// https://meet.google.com/jnu-qkka-sgz