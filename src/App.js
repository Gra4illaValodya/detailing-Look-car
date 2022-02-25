import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router";



const App = (props) => {


    return (

        <BrowserRouter>
            <div className="app">
                <Header/>
                <Nav/>

                <div className="appContent">

                    <Routes>

                        <Route path="/profile"
                               element={<Profile postElementData={props.state.profilePage.postElementData}
                                                 addNewPost={props.addNewPost}
                                                 textareaText={props.state.profilePage.textareaText}
                                                 updatePostText={props.updatePostText}    />}/>

                        <Route path="/dialog/*"
                               element={<Dialogs dialogElementData={props.state.dialogPage.dialogElementData}
                                                 messageElementData={props.state.dialogPage.messageElementData}
                                                 addMessage={props.addMessage}
                                                 textareaText={props.state.dialogPage.textareaText}
                                                 updateMessageText={props.updateMessageText}/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    )
}


export default App;
