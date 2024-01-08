import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import Layout from './components/Layout';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPost from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="posts">
          <Route index element={<PostsList />} />
          <Route path="add" element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>

        <Route path="users">
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>

        {/* be replaced with a 404 later */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>

  );
}

export default App;
