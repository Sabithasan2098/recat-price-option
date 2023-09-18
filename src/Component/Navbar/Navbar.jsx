import React, { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "UserProfile" },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open) }>
        {
          open === true ? <AiOutlineMenu ></AiOutlineMenu> : <AiOutlineCloseCircle></AiOutlineCloseCircle>
        }
        
      </div>
    <ul  className="md:flex">
        {
            routes.map(route => <Link key={route.id} route={route}></Link>)
        }
    </ul>
  </nav>
  )
 
};

export default Navbar;
