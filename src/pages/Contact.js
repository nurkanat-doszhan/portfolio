import app from '../App.module.scss';
import style from './Contact.module.scss';
// import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faMobileScreenButton } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Stayintouch from '../containers/Stayintouch';

const Contact = () => {
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Contact</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <div className={style.card}>
                <FontAwesomeIcon icon={faMobileScreenButton} size="2xl" />
                <p>+7 7** *** ** **</p>
              </div>
              <div className={style.card}>
                <FontAwesomeIcon icon={faBuilding} size="2xl" />
                <p>Kazakhstan</p>
              </div>
              <div className={style.card}>
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                <p><a href="mailto:nurkanaat@gmail.com">nurkanaat@gmail.com</a></p>
              </div>
              <div className={style.card}>
                <h3>Get In Touch</h3>
                <form action=''>
                  <input required type='text' placeholder='Your name' />
                  <input required type="email" placeholder="Your Email"/>
                  <textarea required name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                  <input className={app.btn} type="submit" value="Subscription" />
                </form>
              </div>
              <div className={style.card}>
                <h3>Message Me</h3>
                <p>Got a project in mind? Let’s work together!
                  Shoot me an email or give me a call,
                  and let’s make something great!</p>
                <p className={style.cardSocIcons}>
                  {/* <a href="https://instagram.com/nurkanaatt/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                  </a> */}
                  <a href="https://github.com/nurkanat-doszhan/" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stayintouch />
    </>
  )
}

export default Contact