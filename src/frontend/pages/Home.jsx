import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../services/blogApi";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Blogify </h1>
        <p>Share your thoughts, stories, and ideas with the world</p>
        <button className="hero-btn" onClick={() => navigate("/add")}>
           Create Your First Blog
        </button>
      </section>

      <section className="features">
        <div className="feature-card"> Create Blogs</div>
        <div className="feature-card">Edit Blogs</div>
        <div className="feature-card"> Delete Blogs</div>
      </section>

      <div className="container">
        <h2 className="page-title">Latest Blogs</h2>

        {blogs.length === 0 ? (
          <p className="empty-text">No blogs yet</p>
        ) : (
          <div className="blog-list">
            {blogs.map((b) => (
              <BlogCard
                key={b._id}
                blog={b}
                onEdit={(id) => navigate(`/edit/${id}`)}
                onDelete={async (id) => {
                  await deleteBlog(id);
                  loadBlogs();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
