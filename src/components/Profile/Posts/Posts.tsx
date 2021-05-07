import React, {KeyboardEvent} from 'react'
import NewPost from './NewPost/NewPost'
import Post from './PostItem/Post'
import {PostsType} from '../../../redux/profile-reducer'

type PostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    changeNewPostText: (newText: string) => void
}

const Posts = (props: PostsPropsType) => {

    const onPostAdd = () => {
        props.addPost()
    }

    const onPostTextChange = (newText: string) => {
        props.changeNewPostText(newText)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.addPost()
        }
    }

    return (
        <div>
            <NewPost
                newPostText={props.newPostText}
                onPostTextChange={onPostTextChange}
                onPostAdd={onPostAdd}
                onKeyPressHandler={onKeyPressHandler}
            />

            {
                props.posts.map(p => <Post key={p.id} postText={p.postText} likesCount={p.likesCount} />)
            }
        </div>
    )
}

export default Posts
