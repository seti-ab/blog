import React from 'react'
import PostDemo from '../features/posts/PostDemo';
import { useSelector } from 'react-redux';
import { getPostsError, getPostsStatus, selectPostIds } from '../features/posts/postSlice';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const sortedPostsIds = useSelector(selectPostIds);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (status === "loading") {
    content = <Loading />
  }

  else if (status === "succeeded") {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const randomPosts = shuffle(sortedPostsIds);

    content = <>
      {randomPosts.length > 0 ?
        <h2 className='max-w-7xl px-2 sm:px-6 lg:px-8 font-bold text-3xl mt-14'>What's New?</h2>
        : <div className="max-w-[1000px] text-center mx-auto mt-20">
          <h2 className='text-center px-2 sm:px-6 lg:px-8 font-bold text-3xl mt-14 mb-4'>No Posts Found</h2>
          <p className='text-xl mb-6 '>Got the scoop on the next big tech breakthrough?</p>
          <p className="mb-6">Don't wait for release date! Drop your exclusive here and break the news first.</p>

          <Link
            to="posts/add"
            className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
            Add New Post
          </Link>
        </div>
      }
      {randomPosts?.map((postId, index) => {
        if (index < 3)
          return <PostDemo key={postId} postId={postId} className={index % 2 === 0 ? "flex-row-reverse" : "flex-row"} />
      })}
    </>
  }

  else if (status === "failed") {
    content = <p>{error}</p>
  }

  return (
    <div className='mb-16 flex flex-col gap-y-16'>
      {content}
    </div>
  );
}

export default HomePage;