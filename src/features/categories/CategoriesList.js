import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCategories } from './categoriesSlice'
import Page from '../../components/Page';
import PostCategoryTag from '../posts/PostCategoryTag';

const CategoriesList = () => {
    const categories = useSelector(selectAllCategories);
    return (
        <Page title="Categories">
            <div className='flex items-center justify-center'>
                <ul className='grid grid-cols-3 gap-4 '>
                    {categories.map(category => {
                        return <li key={category.id}>
                            <PostCategoryTag categoryId={category.id} />
                        </li>
                    })}
                </ul>
            </div>
        </Page>
    )
}

export default CategoriesList;