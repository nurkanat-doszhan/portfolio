import About from '../containers/About';
import Gallery from '../containers/Gallery';
import Hero from '../containers/Hero';
import Projects from '../containers/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
    </>
  )
}

export default Home;