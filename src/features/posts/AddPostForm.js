import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllusers } from "../users/usersSlice";

const AddPostForm = () => {
  const InitialFormState = { title: "", body: "", userId: "" };
  const [formData, setFormData] = useState(InitialFormState);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const users = useSelector(selectAllusers);

  const handleChange = (e) => {
    let temp = { ...formData };
    temp[e.target.name] = e.target.value;
    setFormData(temp);
  };

  const handleValidation = () => {
    const { title, body, userId } = formData;
    if ([title, body, userId].every(Boolean) && addRequestStatus === "idle") {
      return true;
    } else return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = handleValidation();

    if (formIsValid) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({...formData})).unwrap();
        setFormData(InitialFormState);
      } catch (err) {
        console.log("Faild to save post", err)
      } finally {
        setAddRequestStatus("idle")
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="sm:col-span-3">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              value={formData.title}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="userId"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Auther
          </label>
          <div className="mt-2">
            <select
              onChange={handleChange}
              id="userId"
              name="userId"
              autoComplete="userId"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="body"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            body
          </label>
          <div className="mt-2">
            <textarea
              onChange={handleChange}
              value={formData.body}
              id="body"
              name="body"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={() => setFormData(InitialFormState)}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={handleValidation() === false}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:text-white disabled:bg-gray-300"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
