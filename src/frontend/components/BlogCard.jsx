const BlogCard = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <p className="author">{blog.author}</p>

      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(blog._id)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(blog._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
