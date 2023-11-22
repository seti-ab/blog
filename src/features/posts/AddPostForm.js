import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewPost } from './postSlice';
const AddPostForm = () => {
    const InitialFormState = { title: "", content: "" }
    const [formData, setFormData] = useState(InitialFormState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let temp = { ...formData };
        temp[e.target.name] = e.target.value;
        setFormData(temp);
    }

    const handleValidation = () => {
        if (formData.title && formData.content) {
            return true;
        } else return false;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = handleValidation();
        if (formIsValid) {
            dispatch(addNewPost({ ...formData }))
            setFormData(InitialFormState);
        } else {
            alert("Form validation failed")
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="col-span-full">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                            <input onChange={handleChange} value={formData.title} type="text" name="title" id="title" autoComplete="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">Content</label>
                        <div className="mt-2">
                            <textarea onChange={handleChange} value={formData.content} id="content" name="content" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={()=>setFormData(InitialFormState)} type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button onClick={handleSubmit} type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form >
    )
}

export default AddPostForm