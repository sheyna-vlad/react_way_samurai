import React from 'react'
import classes from './App.module.css'
import Navbar from './containers/Navbar/Navbar'
import Footer from './containers/Footer/Footer'
import MessengerContainer from './containers/Messenger/MessengerContainer'
import {Route, Switch} from 'react-router-dom'
import UsersContainer from './containers/Users/UsersContainer'
import ProfileContainer from './containers/Profile/ProfileContainer'
import HeaderContainer from './containers/Header/HeaderContainer'
import Login from './containers/Login/Login'

type AppPropsType = {
    //state: RootStateReduxType
}

const App = () => {
    return (
        <div className={classes.app}>
            <div className={classes.container}>
                <HeaderContainer />

                <div className={classes.wrapper}>
                    <Navbar />

                    <div className={classes.content}>
                        <Switch>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/profile/:userId?">
                                <ProfileContainer />
                            </Route>
                            <Route path="/messenger">
                                <MessengerContainer />
                            </Route>
                            <Route path="/users">
                                <UsersContainer />
                            </Route>
                        </Switch>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default App
