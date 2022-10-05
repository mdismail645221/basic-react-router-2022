import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    console.log(post)

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${post.id}`)
    }

    return (
        <div className='post'>
            <h3>Post: {post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>OnClick Show Details</button>
        </div>
    );
};

export default Post;