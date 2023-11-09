import app from "../App.module.scss";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={app.container}>
      <nav className={style.navbar}>
        <a href="/"><img className={style.navbar_logo} src="/logo.webp" /></a>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <a className={app.btn} href="#" role="button">Hire Me</a>
      </nav>
    </div>
  )
}

export default Navbar;