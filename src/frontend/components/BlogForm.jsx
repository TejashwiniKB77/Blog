import { useState } from "react";

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [blog, setBlog] = useState({
    title: initialData.title || "",
    content: initialData.content || "",
    author: initialData.author || "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(blog);
  };

  return (
    <div className="form-wrapper">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Blog Form</h2>

        <input
          name="title"
          placeholder="Blog Title"
          value={blog.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Blog Content"
          value={blog.content}
          onChange={handleChange}
          required
        />

        <input
          name="author"
          placeholder="Author Name"
          value={blog.author}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
