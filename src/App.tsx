import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { PropsStoreType} from "./Redux/store";

export type PropsAppType = {
    store: PropsStoreType
}

function App(props: PropsAppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <Header/>
                <Navbar/>


                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.store.getState().profilePage.posts}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newPostText={props.store.getState().profilePage.newPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;