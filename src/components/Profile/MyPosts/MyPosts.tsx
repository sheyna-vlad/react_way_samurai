import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PropsMyPostsType} from "./MyPostsContainer";







const MyPosts = (props: PropsMyPostsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost();
            newPostElement.current.value = '';
        }
    }

    let onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;

            if (text.trim() !== '') {

                props.onPostChange(text);
            }
        }
    }
    return (

        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.profilePage.newPostText}
                    onChange={onPostChangeHandler}
                />
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.profilePage.posts.map(t => <Post key={t.id} id={t.id} message={t.message} likesCount={t.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;