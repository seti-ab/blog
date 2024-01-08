import React from 'react'
import PostDemo from '../features/posts/PostDemo';
import { useSelector } from 'react-redux';
import { getPostsError, getPostsStatus, selectPostIds } from '../features/posts/postSlice';

const HomePage = () => {
  const sortedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>
  }

  else if (status === "succeeded") {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const randomPosts = shuffle(sortedPostsIds);
    content = randomPosts?.map((postId, index) => {
      if (index < 3)
        return <PostDemo key={postId} postId={postId} className={index % 2 === 0 ? "flex-row-reverse" : "flex-row"} />
    })
  }

  else if (status === "failed") {
    content = <p>{error}</p>
  }

  return (
    <div className='mb-16 flex flex-col gap-y-16'>
      <h1 className='max-w-7xl px-2 sm:px-6 lg:px-8 font-bold text-3xl mt-14'>What's New?</h1>
      {content}
    </div>
  );
}

export default HomePage;