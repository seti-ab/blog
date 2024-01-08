import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../categories/categoriesSlice';
import { Link } from 'react-router-dom';

const PostCategoryTag = ({ categoryId }) => {

    const categories = useSelector(selectAllCategories);
    const category = categories.find(category => category.id === categoryId);
    return (
        <Link to={category ? `/categories/${categoryId}` : '/categories'}>
            <div className="text-sm leading-6 inline-flex bg-gray-100 rounded-xl py-1 px-4 font-bold text-gray-700 w-fit mx-auto hover:bg-violet-50 hover:text-black">
                <p className="font-semibold text-gray-900">
                    # {category ? category.name : "Article Categories"}
                </p>
            </div>
        </Link>
    )
}

export default PostCategoryTag;