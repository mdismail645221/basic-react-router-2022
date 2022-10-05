import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>This is post Details ID NUMBER: {id}</h3>
            <p><strong>Title:</strong>{ title}</p>
            <p><strong>--</strong>{body}</p>
            <button onClick={handleNavigate}>Athour Info</button>
        </div>
    );
};

export default PostDetails;