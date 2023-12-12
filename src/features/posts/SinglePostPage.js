import React from 'react'
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import PostAuthor from './PostAuthor';
import PostTimestamp from './PostTimestamp';
import ReactionButtons from './ReactionButtons';
import { Link, useParams } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/20/solid';

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
        <article className="md:px-8 px-6 py-4 flex">
            <div className="mx-3">
                <h2 className="font-medium text-gray-900 text-2xl">{post.title}</h2>
                <p className="mt-4 text-justify text-lg text-gray-900">
                    {post.body}
                </p>
                <div className='flex flex-col mt-16'>
                    <PostAuthor userId={post.userId} />
                    <PostTimestamp date={post.date} />
                </div>
                <div className='flex sm:flex-row flex-col sm:justify-between items-center gap-y-6'>
                    <div className='flex sm:w-fit w-[100%]'><ReactionButtons post={post} /></div>
                    <Link to={`/posts/edit/${post.id}`} className="sm:w-fit w-[100%]">
                        <div className='flex sm:w-fit w-[100%] bg-violet-950 h-9 items-center justify-center rounded gap-2 px-3 hover:opacity-90 hover:text-white'>
                            <PencilSquareIcon className="w-5 h-5 text-gray-50" aria-hidden="true" />
                            <span className='text-gray-50'>Edit Post</span>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default SinglePostPage;