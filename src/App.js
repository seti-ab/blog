import { Route, Routes } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import Layout from './components/Layout';
import SinglePostPage from './pages/SinglePostPage';
import EditPost from './features/posts/EditPostForm';
import CategoriesList from './features/categories/CategoriesList';
import CategoriesPage from './features/categories/CategoriesPage';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/404';

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
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
