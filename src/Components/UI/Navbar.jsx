import { NavLink, useNavigate } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  function toggleNavMenu() {
    setOpenDrawer((curr) => !curr);
  }

  function closeDrawer() {
    setOpenDrawer(false);
  }

  function handleScroll() {
    const offset = window.scrollY;
    offset > 50 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <h2 onClick={() => navigate("/")}>Melting Ice Marketing</h2>
      <ul className="navbar">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/team"}>Team</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>

      <HiBars3 className="drawer" onClick={toggleNavMenu} />

      <ul className={`navmenu ${openDrawer ? "open" : ""}`}>
        <li onClick={closeDrawer}>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to={"/team"}>Team</NavLink>
        </li>
        <li onClick={closeDrawer}>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
