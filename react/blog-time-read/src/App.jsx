import posts from "./data/data.json"
import BlogCard from "./components/BlogCard";
import "./App.css";

function App() {

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          {...post}
        />
      ))}
    </div>
  )
}

export default App;