import app from '../App.module.scss';
import style from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Stayintouch from '../containers/Stayintouch';

const About = () => {
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>About me</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <img src="/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg" alt="Me" />
              <div className={style.text}>
                <h3>Crafting innovative web solutions with passion and precision</h3>
                <p>Hey there, I’m Nurkanat, a skilled web developer with an eye for aesthetics. I specialize in front-end development and UI/UX design, and my mission is to create immersive online experiences that captivate and engage. Whether you need a portfolio showcase, a project gallery, or a responsive layout, I have the skills and expertise to bring your vision to life.</p>
                <br />
                <p>Let’s talk with me.</p>
                <p><b><a className={style.mail} href="mailto:nurkanaat@gmail.com">nurkanaat@gmail.com</a></b></p>
                <p className={style.socicons}>
                  <a href="https://github.com/nurkanat-doszhan/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://instagram.com/nurkanaatt/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </p>
              </div>
            </div>
            <div className={style.flex}>
              <div className={style.text}>
                <h3>My Services</h3>
                <p>With a focus on web development, front-end development, and UI/UX design, I have the skills to elevate your online presence and captivate your audience. My services include portfolio showcase, project gallery, and responsive layout design, all tailored to your unique needs and preferences. Let’s work together to create a website that truly stands out.</p>
                <a className={app.btn}>Download CV</a>
              </div>
              <div className='pbars'>
                <progress id="file" data-label="HTML" max="100" value="88">70%</progress>
                <progress id="file" data-label="CSS" max="100" value="72">50%</progress>
                <progress id="file" data-label="JS" max="100" value="46">40%</progress>
                <progress id="file" data-label="ReactJS" max="100" value="39">40%</progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stayintouch />
    </>
  )
}

export default About