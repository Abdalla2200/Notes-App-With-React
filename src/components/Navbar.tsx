import { NavLink } from "react-router-dom";
import notesLogo from "../assets/notes-svgrepo-white-com.svg";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <nav className="flex items-center justify-between py-4 px-6 container ">
        <div className="w-10 md:w-12">
          <NavLink to="/">
            <img className="w-full h-full" src={notesLogo} alt="notes logo" />
          </NavLink>
        </div>
        <div className="flex items-center gap-6 md:text-xl text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }`
            }
          >
            My Notes
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
