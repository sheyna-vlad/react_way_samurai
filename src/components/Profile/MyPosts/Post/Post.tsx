import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img
                src="https://newstyle-mag.com/wp-content/uploads/2020/10/%D0%91%D0%B8%D1%81%D1%82%D0%B5%D1%80-%D0%91%D0%B8%D0%BD.jpg" alt='Error'/>
            {props.message}
            <div>
                {props.likesCount}  like
            </div>
        </div>
    );
}

export default Post;