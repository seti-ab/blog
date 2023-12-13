import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCategories } from './categoriesSlice'
import { Link } from 'react-router-dom';

const CategoriesList = () => {
    const categories = useSelector(selectAllCategories);
    return (
        <section>
            <h2><b>Categories</b></h2>
            <ul>
                {categories.map(category => {
                    return <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default CategoriesList;