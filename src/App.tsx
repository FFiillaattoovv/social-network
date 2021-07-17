import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {getAuthUserDataThunkCreator} from './redux/auth-reducer';

type MSTPType = {};

type MDTPType = {
    getAuthUserDataThunkCreator: () => void
}

type PropsType = MSTPType & MDTPType;

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {getAuthUserDataThunkCreator})(App);
