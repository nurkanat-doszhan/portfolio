import app from "../App.module.scss";
import style from "./Footer.module.scss";
// import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <footer>
      <div className={app.container}>
        <div className={app.inner}>
          <div className={app.col}>
            {/* <a href="https://instagram.com/nurkanaatt/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
            <a href="https://github.com/nurkanat-doszhan/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <br />
            <small>© Nurkanat Doszhan, {new Date().getFullYear()}</small>
          </div>
          <div className={app.col}>
            <img className={style.logo} src="/logow.webp" />
          </div>
          <div className={app.col}>
            <a className={style.mail} href="mailto:nurkanaat@gmail.com">nurkanaat@gmail.com</a>
          </div>
        </div>
      </div>
      <p>Made by Me</p>
    </footer>
  )
}

export default Footer