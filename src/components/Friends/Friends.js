import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>Every Body mans..How are you all Friends ..YAYYYY: {friends.length}</h1>
            <div className='friends-container'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend = {friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;