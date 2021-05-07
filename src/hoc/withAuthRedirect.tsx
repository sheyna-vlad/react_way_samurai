import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {RootStateReduxType} from '../redux/redux-store'

type mstpType = {
    isAuth: boolean
}

function mstp(state: RootStateReduxType): mstpType {
    return {
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mstpType) {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to="/login" />

        return <Component {...restProps as T} />
    }

    return connect(mstp)(RedirectComponent)
}

export default WithAuthRedirect
