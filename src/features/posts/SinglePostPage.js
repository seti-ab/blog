import React from 'react'
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import PostCategoryTag from './PostCategoryTag';
import Timestamp from './Timestamp';
import ReactionButtons from './ReactionButtons';
import { Link, useParams } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/20/solid';
import Page from '../../components/Page';

const SinglePostPage = () => {
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, Number(postId)))
    if (!post) {
        return (
            <section>
                <h2>404 NOT FOUND!</h2>
            </section>
        )
    }

    return (
        <Page title={post.title}>
            <article>
                <div className="mx-3">
                    <h2 className="font-medium text-gray-900 text-2xl"></h2>
                    <p className="mt-4 text-justify text-lg text-gray-900">
                        {post.body}
                    </p>
                   
                    <div className='mt-8 flex sm:flex-row flex-col sm:justify-between gap-y-6 items-end'>
                        <div className='flex sm:w-fit w-[100%]'>
                            <ReactionButtons post={post} />
                        </div>
                        <Timestamp date={post.date} />
                        
                    </div>
                    <div className='mt-6 flex sm:flex-row flex-col sm:justify-between gap-y-6 items-end'>
                        <PostCategoryTag categoryId={post.categoryId} />
                        <Link to={`/posts/edit/${post.id}`} className="sm:w-fit w-[100%]">
                            <div className='flex sm:w-fit w-[100%] bg-violet-950 h-9 items-center justify-center rounded gap-2 px-3 hover:opacity-90 hover:text-white'>
                                <PencilSquareIcon className="w-5 h-5 text-gray-50" aria-hidden="true" />
                                <span className='text-gray-50'>Edit Post</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </article>
        </Page>
    )
}

export default SinglePostPage;