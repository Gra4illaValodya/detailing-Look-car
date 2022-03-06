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
                                                 dispatch={props.dispatch}
                                                 textareaText={props.state.profilePage.textareaText}/>}/>

                        <Route path="/dialog/*"
                               element={<Dialogs  store={props.store}
                                                            />}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    )
}


export default App;
