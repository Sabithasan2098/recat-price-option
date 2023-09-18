import React, { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "UserProfile" },
  ];
  return (
    <nav className="bg-yellow-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute duration-1000 md:static bg-yellow-300
         p-4 rounded-xl 
      ${open ? "top-6" : "-top-64"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
