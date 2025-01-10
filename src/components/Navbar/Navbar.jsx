import { Link, NavLink, useNavigate } from "react-router-dom";
import useScrollDirection from "../../hooks/ScrollDirection/useScrollDirection";
import useTheme from "../../hooks/ThemeToggle/useTheme";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import useRole from "../../hooks/GetRole/useRole";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../hooks/GetCartData/useCart";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  const { carts } = useCart();

  const isVisible = useScrollDirection();


  const { user, loading, logOut } = useAuth();
  const { role } = useRole();

  const navigate = useNavigate();
  const handelLogOut = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      {user && role === "admin" && (
        <li>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/our-menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/our-shop">OUR SHOP</NavLink>
      </li>
      <li>
        <Link to="/user-dashboard/my-cart">
          <span className="indicator">
            <span className="indicator-item badge left-5">{carts.length}</span>
            <button>
              <FaCartArrowDown className="text-2xl" />
            </button>
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <nav
      className={` fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar bg-base-300 opacity-80 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Foods</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={theme === "light" ? "yellow" : ""}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              onClick={toggleTheme}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {loading ? (
            <div className="skeleton h-12 w-12 shrink-0 border border-yellow-600 rounded-full"></div>
          ) : user ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  alt={user?.displayName}
                  title={user?.displayName}
                  className="h-12 w-12 rounded-full"
                />
                <button className="btn bg-yellow-400" onClick={handelLogOut}>
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button
                  className={`btn btn-sm  border rounded-sm ${
                    theme === "night" && "border-blue-400"
                  }`}
                >
                  SignUp
                </button>
              </Link>
              <Link to="/login">
                <button
                  className={`btn btn-sm  border rounded-sm ${
                    theme === "night" && "border-blue-400"
                  }`}
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
