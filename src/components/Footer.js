import "./Footer.scss";
// import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="col">
            <a href="https://instagram.com/nurkanaatt/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/nurkanat-doszhan/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <br />
            <small>© Nurkanat Doszhan, 2023</small>
          </div>
          <div className="col">
            <img className="logo" src="/logow.webp" />
          </div>
          <div className="col">
            <a className="mail" href="mailto:nurkanaat@gmail.com">nurkanaat@gmail.com</a>
          </div>
        </div>
      </div>
      <p>Made by Me</p>
    </footer>
  )
}

export default Footer