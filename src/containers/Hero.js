import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="inner">
          <div className="col">
            <h1>MYNAME - Ceb Ceveloper 💻</h1>
            <p>Welcome to my portfolio website! I’m a passionate web developer, specializing in front-end development and UI/UX design. My mission is to create stunning, user-friendly websites that deliver the best user experience. Explore my projects and gallery and get to know me better!</p>
            <a className="btn" href="#" role="button">Learn More</a>
          </div>
          <div className="col">
            <img src="/hero-bg.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;