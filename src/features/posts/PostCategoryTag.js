import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../categories/categoriesSlice';

const PostCategoryTag = ({ categoryId }) => {
    const categories = useSelector(selectAllCategories);
    const category = categories.find(category => category.id === categoryId);

    return (
        <div className="text-sm leading-6 inline-flex">
            <p className="font-semibold text-gray-900">
                {category?.name}
            </p>
        </div>
    )
}

export default PostCategoryTag;