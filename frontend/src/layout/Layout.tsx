import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import type { AuthContextType, Linkinterface } from "../types";
import { Menu } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const links: Linkinterface[] = [{ to: "/", label: "Home" }];
  const auth = useContext<AuthContextType | null>(AuthContext);
  const user = auth!.user;
  const logout = auth!.logout;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="navbar bg-gray-100 shadow-md px-4">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold text-primary">
            Mini Linkedin
          </Link>
        </div>
        <div className="flex-none text-black hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:underline hover:font-bold transition-all underline-offset-4 decoration-2 decoration-red-500"
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <button
              onClick={logout}
              className="ml-4 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-primary btn-circle">
            <Menu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
          >
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:underline font-bold underline-offset-4 decoration-red-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <button
                  onClick={logout}
                  className="w-full text-left hover:underline font-bold underline-offset-4 decoration-red-500 text-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
