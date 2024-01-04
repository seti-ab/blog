import React from 'react'
import AddPostForm from '../features/posts/AddPostForm'

const AddPostPage = () => {
    return (
        <div className="md:px-8 px-6 py-4 flex w-full max-w-4xl mx-auto flex-col">
            <h2 className='font-bold mb-6 text-xl text-primary'>Add New Post</h2>
            <AddPostForm />
        </div>
    )
}

export default AddPostPage