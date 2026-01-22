import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "/login";
  };

  return (
    <div className="form-wrapper">
      <form className="blog-form" onSubmit={handleRegister}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
