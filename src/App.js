import './App.scss';
import "./null.scss";
import React from "react";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (

        <BrowserRouter>
            <div className="app-grid">
                <Header/>
                <SidePanel/>
                <div className="content">
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
