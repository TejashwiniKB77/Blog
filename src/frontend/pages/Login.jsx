import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (
      login.email === savedUser.email &&
      login.password === savedUser.password
    ) {
      alert("Login successful!");
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="blog-form" onSubmit={handleLogin}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
