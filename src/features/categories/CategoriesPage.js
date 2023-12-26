import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectCategoryById } from './categoriesSlice';
import { selectPostsByCategory } from '../posts/postSlice';

import { Link } from 'react-router-dom';
import Page from '../../components/Page';

const CategoriesPost = () => {
    const { categoryId } = useParams();
    const category = useSelector((state) => selectCategoryById(state, categoryId));

    const categoryPosts = useSelector(state => selectPostsByCategory(state, categoryId));

    return (
        <Page title={`${category?.name} Posts`}>
            <div className='mx-auto w-fit'>
                <ol className='list-decimal flex flex-col gap-4 marker:text-violet-800 marker:font-bold'>
                    {categoryPosts.map(post => {
                        return (
                            <li key={post.id} className='hover:text-violet-900 text-lg'>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Page>
    )
}

export default CategoriesPost;