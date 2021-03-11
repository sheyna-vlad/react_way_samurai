import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator,  updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import {ActionsTypes, PropsPostType} from "../../../Redux/store";

export type PropsMyPostsType = {
    posts: Array<PropsPostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}

const MyPosts = (props: PropsMyPostsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator());
            newPostElement.current.value = '';
        }
    }

    let onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim() !== '') {
                props.dispatch(updateNewPostTextCreator(text));

            }

        }
    }
    return (

        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChangeHandler}
                />
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(t => <Post key={t.id} message={t.message} likesCount={t.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;