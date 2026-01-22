import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <h2 className="nav-logo" onClick={() => navigate("/")}>
          Blogify
        </h2>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/add"
              className={location.pathname === "/add" ? "active-link" : ""}
            >
              Add Blog
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (UI only) */}
        <div className="auth-buttons">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
