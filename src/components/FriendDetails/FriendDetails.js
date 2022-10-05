import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const { name, website, phone } = friendDetails;
    console.log(friendDetails)
    return (
        <div>
            <h1>This is FriendDetails</h1>
            <h3>name: {name}</h3>
            <p>{ website}</p>
            <p><strong>{ phone}</strong></p>
        </div>
    );
};

export default FriendDetails;