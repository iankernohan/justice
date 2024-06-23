import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resize, setResize] = useState(
    window.screen.width < 750 ? true : false
  );
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname == "/";

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    offset > 50 ? setScrolled(true) : setScrolled(false);
  }, []);

  const handleResize = useCallback(() => {
    const width = window.screen.width;
    width < 750 ? setResize(true) : setResize(false);
  }, []);

  function closeDrawer() {
    setOpenDrawer(false);
  }

  useEffect(() => {
    setOpenDrawer(false);
  }, [isHome]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <nav
      className={`${scrolled ? "scrolled" : ""}`}
      style={isHome && !scrolled ? { color: "#ffefeb" } : {}}
    >
      <h2 onClick={() => navigate("/")}>Melting Ice Marketing</h2>
      {!resize ? (
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
      ) : (
        <Hamburger
          toggled={openDrawer}
          className="drawer"
          toggle={setOpenDrawer}
          easing="ease-in-out"
          duration={0.2}
          size={26}
        />
      )}

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
