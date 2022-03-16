import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import SideBar from "./components/SideBar/SideBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='/dialogs'
                           element={ <DialogsContainer /> }/>

                    <Route path='/profile'
                           element={ <Profile  /> }/>

                    <Route path='/sidebar'
                               element={<SideBar />}/>
                    </Routes>
                    </div>
            </div>
            </BrowserRouter>
        )
}

export default App;