const Blog = require("../models/Blog");

// CREATE
exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const blog = await Blog.create(req.body);
  res.status(201).json(blog);
};

// READ ALL
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// READ ONE
exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};

// UPDATE
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
};

// DELETE
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted successfully" });
};
