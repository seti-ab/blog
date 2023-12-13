import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectCategoryById } from './categoriesSlice';
import { selectPostsByCategory } from '../posts/postSlice';

import { Link } from 'react-router-dom';

const CategoriesPost = () => {
    const { categoryId } = useParams();
    const category = useSelector((state) => selectCategoryById(state, categoryId));

    const categoryPosts = useSelector(state => selectPostsByCategory(state, categoryId));

    return (
        <section>
            <h2>{category?.name}</h2>
            <ol>
                {categoryPosts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default CategoriesPost;