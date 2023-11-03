import app from "../App.module.scss";
import style from "./About.module.scss";

const About = () => {
  return (
    <div className={style.about}>
      <div className={app.container}>
        <h2>About Me 🤓</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <h3>Meet Nurkanat - Your Web Development Partner</h3>
            <p>As a web developer, I’m on a mission to create stunning, user-friendly websites that deliver the best user experience. With a passion for front-end development and UI/UX design, I specialize in creating responsive layouts that look great on any device. Whether you need a portfolio showcase, project gallery, or a custom website, I’m here to help you achieve your digital goals.</p>
            <a className={app.btn} href="#" role="button">Contact Me</a>
          </div>
          <div className={app.col}>
            {
              [19].map((element, value) => { return (
                <img key={value} src={`/about/${Math.floor(Math.random() * element)}.png`} alt="" />
              )})
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;