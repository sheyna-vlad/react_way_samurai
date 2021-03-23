import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";
export let rerenderEntireTree = () => {

    ReactDOM.render(
        <Provider store={store} >
            <App  store={store}/>
        </Provider>,



        document.getElementById('root')
    );

}

rerenderEntireTree();

store.subscribe( () => {
    rerenderEntireTree();
} );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
