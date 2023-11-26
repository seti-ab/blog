import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>
  } else if (status === "succeeded") {
    //slice -> a shallow copy of the array
    const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (status === "failed") {
    content = <p>{error}</p>
  }
  return (
    <section className="divide-y divide-gray-200">
      {content}
    </section>
  );
};

export default PostsList;
