import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <main className="container mx-auto">
      {/* <Counter /> */}
      <PostsList />
      <AddPostForm/>
    </main>
  );
}

export default App;
