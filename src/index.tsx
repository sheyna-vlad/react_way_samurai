import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
