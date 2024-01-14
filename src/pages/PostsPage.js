import React from 'react'
import Page from '../components/Page'
import PostsList from '../features/posts/PostsList'

const PostsPage = () => {
  return (
    <Page title={"The Archive: Explore a Collection of Insights and Ideas"} className={"!bg-transparent"}>
        <PostsList/>
    </Page>
  )
}

export default PostsPage;