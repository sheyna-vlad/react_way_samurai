import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {RootStateReduxType} from '../../redux/redux-store'
import {compose, Dispatch} from 'redux'
import {changeNewMessageTextCreator, MessengerPageType, sendMessageCreator} from '../../redux/messenger-reducer'
import {Messenger} from './Messenger'
import WithAuthRedirect from '../../hoc/withAuthRedirect'

type MapStateToPropsType = {
    messenger: MessengerPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    textChange: (newText: string) => void
}

type OwnPropsType = {}

export type MessengerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => {
    return {
        messenger: state.messengerPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        textChange: (newText: string) => {
            dispatch(changeNewMessageTextCreator(newText))
        }
    }
}

export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateReduxType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messenger)

