import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const sortedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>
  } else if (status === "succeeded") {
    content = sortedPostsIds?.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (status === "failed") {
    content = <p>{error}</p>
  }
  return (
    <section className="flex justify-center flex-wrap gap-12">
      {content}
    </section>
  );
};

export default PostsList;
