import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h6>contact@meltingicemarketing.com</h6>
      <img src="./logo.png" alt="" />
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
