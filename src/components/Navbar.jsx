import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
      {/* <div>
        <Link to="*">404 page</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
