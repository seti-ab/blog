import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SinglePostPage from './pages/SinglePostPage';
import CategoriesList from './features/categories/CategoriesList';
import CategoriesPage from './features/categories/CategoriesPage';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/404';
import PostsPage from './pages/PostsPage';
import EditPostPage from './pages/EditPostPage';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />
        <Route path="/blog" element={<Navigate to="/" />} />

        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="add" element={<AddPostPage />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostPage />} />
        </Route>

        <Route path="categories">
          <Route index element={<CategoriesList />} />
          <Route path=':categoryId' element={<CategoriesPage />} />
        </Route>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
