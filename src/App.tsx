import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import Profile from "./components/Profile/Profile";
import state, { addPost } from "./redux/state";


function App() {
    let posts = state.profilePage.posts;
    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile posts={posts} addPost={addPost}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
