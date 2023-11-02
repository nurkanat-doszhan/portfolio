import About from '../containers/About';
import Gallery from '../containers/Gallery';
import Hero from '../containers/Hero';
import Projects from '../containers/Projects';
import Quotes from '../containers/Quotes';
import Stayintouch from '../containers/Stayintouch';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Quotes />
      <Stayintouch />
    </>
  )
}

export default Home;