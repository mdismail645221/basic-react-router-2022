import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>This is Post Area</h1>
            <div className='post-container'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post ={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;