import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {RootStateReduxType} from '../../redux/redux-store'
import {
    addPost,
    changeNewPostText,
    getProfile,
    getProfileStatus,
    PostsType,
    updateProfileStatus
} from '../../redux/profile-reducer'
import Profile from '../../components/Profile/Profile/Profile'
import Posts from '../../components/Profile/Posts/Posts'
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import {compose} from 'redux'
import {ProfileType} from '../../api/api'

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ userId?: string }>> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13444'
        }
        this.props.getProfile(Number(userId))
        this.props.getProfileStatus(Number(userId))
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateProfileStatus={this.props.updateProfileStatus}
                />
                <hr />
                <Posts
                    newPostText={this.props.newPostText}
                    posts={this.props.posts}
                    addPost={this.props.addPost}
                    changeNewPostText={this.props.changeNewPostText}
                />
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null,
    posts: PostsType[],
    newPostText: string
    isAuth: boolean
    status: string
}

type MapDispatchToPropsType = {
    changeNewPostText: (newText: string) => void,
    addPost: () => void
    getProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void
}

type OwnPropsType = {}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateReduxType>(mapStateToProps, {
        changeNewPostText,
        addPost,
        getProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter
)(ProfileContainer)
