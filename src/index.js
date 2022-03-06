
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
                 dispatch={store.dispatch.bind(store)}// бінд не визиває функцію ,він бере функцію dispatch  звязує з store, і метод bind повертає іншу функцію така сама як і dispatch але всередині this буде  store
                 store={store}>

            </App>

        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState()); // тут ми не біндуємо бо визиваємо  getState від іменні store
store.subscribe(rerenderEntireTree)



// https://meet.google.com/jnu-qkka-sgz