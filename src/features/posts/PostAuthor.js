import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllusers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllusers);
    const author = users.find(user => user.id === Number(userId));

    return (
        <div className="text-sm leading-6 inline-flex mt-6">
            <p className="font-semibold text-gray-900">
                by {author?.username}
            </p>
        </div>
    )
}

export default PostAuthor;