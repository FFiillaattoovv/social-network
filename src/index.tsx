import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

export type dialogsDataType = {
    name: string
    id: number
}

export type messagesDataType = {
    message: string
    id?: number
}

export type postsDataType = {
    id?: number
    message: string
    likesCount: number
}

let dialogsData:Array<dialogsDataType> = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Maria"},
    {id: 3, name: "Maxim"},
    {id: 4, name: "Paul"},
    {id: 5, name: "Elena"}
];

let messagesData: Array<messagesDataType> = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you"},
    {id: 3, message: "I'm fine!"}
];

let postsData: Array<postsDataType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 4},
    {id: 2, message: "It's my first post.", likesCount: 16}
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={messagesData} dialogs={dialogsData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
