import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import PostTimestamp from "./PostTimestamp";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //slice -> a shallow copy of the array
  const orderdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div>
      <h2>Posts</h2>
      <section className="divide-y divide-gray-200">
        {orderdPosts.map((post) => (
          <article key={post.id} className="py-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.title}</p>
              <p className="text-sm text-gray-500">
                {post.content.substring(0, 100)}
              </p>
              <PostAuthor userId={post.userId} />
              <PostTimestamp timestamp={post.date} />
              <ReactionButtons post={post}/>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PostsList;
