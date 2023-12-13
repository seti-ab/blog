import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import Layout from './components/Layout';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPost from './features/posts/EditPostForm';
import CategoriesList from './features/categories/CategoriesList';
import CategoriesPage from './features/categories/CategoriesPage';
import AddPostPage from './features/posts/AddPostPage';
import HomePage from './features/posts/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />

        <Route path="posts">
          <Route index element={<PostsList />} />
          <Route path="add" element={<AddPostPage />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>

        <Route path="categories">
          <Route index element={<CategoriesList />} />
          <Route path=':categoryId' element={<CategoriesPage />} />
        </Route>

        {/* be replaced with a 404 later */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>

  );
}

export default App;
