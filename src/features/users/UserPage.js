import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectUserById } from './usersSlice';
import { selectAllPosts } from '../posts/postSlice';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector((state) => selectUserById(state, Number(userId)));

    const userPosts = useSelector(state => {
        const allPosts = selectAllPosts(state);
        return allPosts.filter(post => post.userId === Number(userId))
    })
    return (
        <section>
            <h2>{user?.name}</h2>
            <ol>
                {userPosts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default UserPage