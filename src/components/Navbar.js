import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img className="navbar-logo" src="/logo.webp" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="btn" href="#" role="button">Hire Me</a>
      </nav>
    </div>
  )
}


export default Navbar;