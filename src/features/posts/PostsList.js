import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";
import Loading from "../../components/Loading";

const PostsList = () => {
  const sortedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (status === "loading") {
    content = <Loading/>
  } else if (status === "succeeded") {
    content = sortedPostsIds?.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (status === "failed") {
    content = <p>{error}</p>
  }
  
  return (
    <section className="flex justify-center flex-wrap gap-6">
      {content}
    </section>
  );
};

export default PostsList;
