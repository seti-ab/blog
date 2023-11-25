import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import PostExcerpt from "./PostExcerpt";


const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


  useEffect(() => {
    let isCurrent = true;
    if (isCurrent === true && status === "idle") {
      dispatch(fetchPosts());
    }
    return () => {
      isCurrent = false;
    }
  }, [status, dispatch])

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
    <div>
      <h2>Posts</h2>
      <section className="divide-y divide-gray-200">
        {content}
      </section>
    </div>
  );
};

export default PostsList;
