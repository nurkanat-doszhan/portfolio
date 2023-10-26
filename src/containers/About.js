import './About.scss'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="inner">
          <div className="col">
            <h3>Meet Nurkanat - Your Web Development Partner</h3>
            <p>As a web developer, I’m on a mission to create stunning, user-friendly websites that deliver the best user experience. With a passion for front-end development and UI/UX design, I specialize in creating responsive layouts that look great on any device. Whether you need a portfolio showcase, project gallery, or a custom website, I’m here to help you achieve your digital goals.</p>
            <a className="btn" href="#" role="button">Contact Me</a>
          </div>
          <div className="col">
            <img src="/glenn-carstens-peters.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;