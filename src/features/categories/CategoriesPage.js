import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectCategoryById } from './categoriesSlice';
import { selectPostsByCategory } from '../posts/postSlice';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import Lottie from 'react-lottie';
import animationData from '../../lotties/no-posts-found.json';

const CategoriesPost = () => {
    const { categoryId } = useParams();
    const category = useSelector((state) => selectCategoryById(state, categoryId));

    const categoryPosts = useSelector(state => selectPostsByCategory(state, categoryId));
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <Page title={`${category?.name} Posts`}>
            <div className='mx-auto w-fit'>
                <ol className='list-decimal flex flex-col gap-4 marker:text-violet-800 marker:font-bold pb-5'>
                    {categoryPosts.length > 0 ? categoryPosts.map(post => {
                        return (
                            <li key={post.id} className='hover:text-violet-900 text-lg'>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </li>
                        )
                    })
                        :
                        <div>
                            <p className='text-lg'>We're brewing up some amazing content for this category, check back later for the first sip!</p>
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    }
                </ol>
            </div>
        </Page>
    )
}

export default CategoriesPost;