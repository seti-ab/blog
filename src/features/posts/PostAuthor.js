import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllusers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllusers);
    const author = users.find(user => user.id === userId);

    return (
        <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
                by {author ? author.name : "Unknown Author"}
            </p>
        </div>
    )
}

export default PostAuthor;