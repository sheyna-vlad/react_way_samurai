import React from 'react'
import Header from '../../components/Header/Header'
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/auth-type'
import {RootStateReduxType} from '../../redux/redux-store'

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    id: number | null
    email: string | null
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

type OwnPropsType = {}

type HeaderProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    id: state.auth.data.id,
    email: state.auth.data.email,
    login: state.auth.data.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
