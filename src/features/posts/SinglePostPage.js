import React from 'react'
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import PostAuthor from './PostAuthor';
import PostTimestamp from './PostTimestamp';
import ReactionButtons from './ReactionButtons';
import { Link, useParams } from 'react-router-dom';

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
        <article className="py-4 flex">
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.title}</p>
                <p className="text-sm text-gray-500">
                    {post.body}
                </p>
                <PostAuthor userId={post.userId} />
                <PostTimestamp timestamp={post.date} />
                <ReactionButtons post={post} />
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            </div>
        </article>
    )
}

export default SinglePostPage;