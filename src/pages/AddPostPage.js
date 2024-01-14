import React from 'react'
import AddPostForm from '../features/posts/AddPostForm'
import Page from '../components/Page'

const AddPostPage = () => {
    return (
        <Page title="Add New Post">
            <AddPostForm />
        </Page>
    )
}

export default AddPostPage