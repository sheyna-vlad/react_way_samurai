import React from 'react'
import classes from './Post.module.css'

type PostPropsType = {
    postText: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = props => {
    return (
        <div className={classes.post}>
            <div className={classes.info}>
                <div className={classes.avatar}>
                    <img src="https://picsum.photos/40?grayscale" alt="Avatar" />
                </div>
                <div className={classes.about}>
                    <h3 className={classes.name}>Ramzan Paragulgov</h3>
                    <span className={classes.time}>12:56</span>
                </div>
            </div>

            <div className={classes.body}>
                <p>{props.postText}</p>
            </div>

            <div className={classes.postFooter}>
                <div className={classes.like}>
                    <span className={classes.likeIcon}>
                        <i className="far fa-heart" />
                        {/*<i className="fas fa-heart"/>*/}
                    </span>
                    <span className={classes.likesCount}>
                        {props.likesCount}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post
