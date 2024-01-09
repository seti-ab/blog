import React from 'react';
import EditPostForm from '../features/posts/EditPostForm';
import Page from '../components/Page';

const EditPostPage = () => {
  return (
    <Page title="Edit Post">
        <EditPostForm/>
    </Page>
  )
}

export default EditPostPage