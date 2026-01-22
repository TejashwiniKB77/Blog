import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./frontend/components/Navbar";

import Home from "./frontend/pages/Home";
import AddBlog from "./frontend/pages/AddBlog";
import EditBlog from "./frontend/pages/EditBlog";
import Login from "./frontend/pages/Login";
import Register from "./frontend/pages/Register";

import "./frontend/styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
