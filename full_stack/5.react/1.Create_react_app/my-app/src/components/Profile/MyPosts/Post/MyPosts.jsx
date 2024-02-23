import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
    let posts =[
        {id:1, message:"Hi", likesCount: 12},
        {id:2, message:"How are u?",likesCount: 11},
        {id:3, message:"Yo!",likesCount: 13}
    ]

    let postsElements =
        posts.map(post=><Post message={post.message} likesCount ={post.likesCount}/> )

    return (
        <div className={s.postsBlock}><h3>My posts</h3><div>
              <div><textarea></textarea></div>
               <div><button></button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;     
   