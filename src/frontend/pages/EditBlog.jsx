import { useEffect, useState } from "react";
import { getBlog, updateBlog } from "../services/blogApi";
import BlogForm from "../components/BlogForm";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog(id).then((res) => setBlog(res.data));
  }, [id]);

  const submitBlog = async (data) => {
    await updateBlog(id, data);
    navigate("/");
  };

  return blog && <BlogForm initialData={blog} onSubmit={submitBlog} />;
};

export default EditBlog;
