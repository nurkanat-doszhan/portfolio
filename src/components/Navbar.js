import app from "../App.module.scss";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={app.container}>
      <nav className={style.navbar}>
        <img className={style.navbar_logo} src="/logo.webp" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <a className={app.btn} href="#" role="button">Hire Me</a>
      </nav>
    </div>
  )
}


export default Navbar;