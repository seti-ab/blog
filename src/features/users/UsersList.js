import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllusers } from './usersSlice'
import { Link } from 'react-router-dom';

const UsersList = () => {
    const users=useSelector(selectAllusers);
  return (
    <section>
        <h2><b>Users</b></h2>
        <ul>
            {users.map(user=>{
                return <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            })}
        </ul>
    </section>
  )
}

export default UsersList