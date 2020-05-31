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

];

let messagesData: Array<messagesDataType> = [

];

let postsData: Array<postsDataType> = [
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
