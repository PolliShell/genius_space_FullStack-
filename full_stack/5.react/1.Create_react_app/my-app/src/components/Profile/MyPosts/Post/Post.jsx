import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    // console.log(props.message);
    return (

        <div className={c.item}>
            <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" /> post1
           {props.message}
           
            <div>
                <span><a href="">like</a> </span>
                {/*<span><a href="">dislike</a></span>*/}
            </div>
               
        </div>

        

    );
}

export default Post;