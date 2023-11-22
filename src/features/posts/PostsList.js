import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    return (
        <div>
            <h2>Posts</h2>
            <section className="divide-y divide-gray-200">
                {posts.map((post) => (
                    <article key={post.id} className="py-4 flex">
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{post.title}</p>
                            <p className="text-sm text-gray-500">{post.content.substring(0, 100)}</p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )


}

export default PostsList;