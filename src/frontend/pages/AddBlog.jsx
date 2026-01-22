import BlogForm from "../components/BlogForm";
import { createBlog } from "../services/blogApi";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const submitBlog = async (data) => {
    await createBlog(data);
    navigate("/");
  };

  return <BlogForm onSubmit={submitBlog} />;
};

export default AddBlog;
