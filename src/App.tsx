import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://th.bing.com/th/id/OIP.5RuWHDPkCpCa6_CKz6jszQHaHa?w=166&h=166&c=7&o=5&dpr=1.4&pid=1.7"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                <img src="https://cdn.pixabay.com/photo/2016/10/29/23/48/animals-1782013__340.png" alt=""/>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
