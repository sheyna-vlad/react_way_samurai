import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './NewPost.module.css'
import Button from '../../../UI/Button/Button'

type NewPostPropsType = {
    newPostText: string
    onPostTextChange: (newText: string) => void
    onPostAdd: () => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

const NewPost = (props: NewPostPropsType) => {

    const addPost = () => {
        props.onPostAdd()
    }

    const textChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.onPostTextChange(newText)
    }

    return (
        <div className={classes.newPost}>
            <img
                src="https://picsum.photos/40?grayscale"
                alt="Avatar"
            />
            <textarea
                value={props.newPostText}
                onChange={textChange}
                placeholder="What's new?"
                rows={2}
                cols={60}
                onKeyPress={props.onKeyPressHandler}
            />
            <div className={classes.newPostButton}>
                <Button
                    onClick={addPost}
                    text="Publish"
                />
            </div>
        </div>
    )
}

export default NewPost
