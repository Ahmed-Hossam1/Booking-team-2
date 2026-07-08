import { Link } from "react-router-dom";
import { X, Bell } from "lucide-react";

import SearchBar from "./searchBar";

const linkClass =
  "block text-text-h text-sm font-light capitalize py-2 px-3 bg-Auth-bg rounded-lg w-fit";

const Nav = () => {
  return (
    <nav>
      <section className="mainContainer py-7 flex justify-between items-center gap-15">
        <Link to="/">
          <img src="/public/Logo.png" className="min-w-8" />
        </Link>
        <SearchBar />

        {/* Nav Links And Profile Page */}
        <section className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {/* Nav Links */}
            <li>
              <Link to="/" className={linkClass}>
                home
              </Link>
            </li>
            <li>
              <Link to="/booking" className={linkClass}>
                booking
              </Link>
            </li>
            <li>
              <Link to="/chat" className={linkClass}>
                chat
              </Link>
            </li>
            <li>
              <button type="button" className={linkClass}>
                <X />
              </button>
            </li>
            <li>
              <button type="button" className={linkClass}>
                <Bell />
              </button>
            </li>
          </ul>
          {/*=== Nav Links ===*/}

          {/* Profile Image */}
          <Link
            to="/profile"
            className="size-11 rounded-full cursor-pointer overflow-hidden block"
          >
            <img src="https://placehold.co/400" className="size-full" />
          </Link>
          {/*===== Profile Image =====*/}
        </section>
        {/* ===== Nav Links And Profile Page ===== */}
      </section>
    </nav>
  );
};

export default Nav;
