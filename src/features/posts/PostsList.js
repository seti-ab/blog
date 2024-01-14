import React from "react";
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";
import Loading from "../../components/Loading";
import Lottie from "react-lottie";
import animationData from '../../lotties/no-posts-found.json';
import { Link } from "react-router-dom";

const PostsList = () => {
  const sortedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  let content;
  if (status === "loading") {
    content = <Loading />
  } else if (status === "succeeded") {
    if (sortedPostsIds.length > 0) {
      content = sortedPostsIds?.map((postId) => (
        <PostExcerpt key={postId} postId={postId} />
      ))
    } else {
      content = <div className="max-w-[1000px] text-center">
        <p className='text-xl mb-6'>Got the scoop on the next big tech breakthrough?</p>
        <p className="mb-6">Don't wait for release date! Drop your exclusive here and break the news first.</p>
        
        <Link to="add" className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">Add New Post</Link>
        
        <div className="max-w-[600px] mx-auto px-3">
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    }
  } else if (status === "failed") {
    content = <p>{error}</p>
  }

  return (
    <section className="flex justify-center flex-wrap gap-8">
      {content}
    </section>
  );
};

export default PostsList;
