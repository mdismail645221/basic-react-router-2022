import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    // console.log(friend)
    const { name, email, username, id} = friend;
    return (
        <div className='single-friend'>
            <h2>name: {name}</h2>
            <p>Email: {email}</p>
            <p><strong><small>user Name: <Link to={`/friend/${id}`}>{username}</Link></small></strong></p>
        </div>
    );
};

export default Friend;