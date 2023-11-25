import React from 'react'
import PostAuthor from "./PostAuthor";
import PostTimestamp from "./PostTimestamp";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({post}) => {
    return (
        <article className="py-4 flex">
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.title}</p>
                <p className="text-sm text-gray-500">
                    {post.body.substring(0, 100)}
                </p>
                <PostAuthor userId={post.userId} />
                <PostTimestamp timestamp={post.date} />
                <ReactionButtons post={post} />
            </div>
        </article>
    )
}

export default PostExcerpt;