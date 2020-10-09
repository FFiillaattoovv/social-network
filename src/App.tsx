import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import Profile from "./components/Profile/Profile";
import {storeType} from "./redux/state";

type PropsType = {
    store: storeType
}

function App(props: PropsType) {
    let posts = props.store._state.profilePage.posts;
    let dialogs = props.store._state.dialogsPage.dialogs;
    let messages = props.store._state.dialogsPage.messages;
    let newPostText = props.store._state.profilePage.newPostText;

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile
                    posts={posts}
                    addPost={props.store.addPost.bind(props.store)}
                    newPostText={newPostText}
                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
