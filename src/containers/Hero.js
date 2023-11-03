import app from "../App.module.scss";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={app.container}>
        <div className={app.inner}>
          <div className={app.col}>
            <h1>MYNAME - Ceb Ceveloper 💻</h1>
            <p>Welcome to my portfolio website! I’m a passionate web developer, specializing in front-end development and UI/UX design. My mission is to create stunning, user-friendly websites that deliver the best user experience. Explore my projects and gallery and get to know me better!</p>
            <a className={app.btn} href="#" role="button">Learn More</a>
          </div>
          <div className={app.col}>
            <img src="/hero-bg.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;