import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://th.bing.com/th/id/OIP.S7Q8-xfE09rM1VOcP7gLzwHaIy?w=163&h=192&c=7&o=5&dpr=1.4&pid=1.7"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                Main content
            </div>
        </div>
    );
}

export default App;
