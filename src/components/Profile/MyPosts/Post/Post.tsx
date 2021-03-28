import React from 'react';
import classes from './Post.module.css'

type PropsType = {
    id?: number
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://th.bing.com/th/id/OIP.zdpQB2oj-lMHpr6h7o8s6QHaHa?w=227&h=211&c=7&o=5&dpr=1.4&pid=1.7"
                 alt=""/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;