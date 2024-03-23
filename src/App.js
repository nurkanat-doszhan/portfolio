import './App.module.scss';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PassGenerator from './pages/projects/PassGenerator/PassGenerator';
import HangmanGame from './pages/projects/HangmanGame/HangmanGame';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path={`portfolio/:Id`} element={<PassGenerator />} /> */}
          {/* <Route path={`portfolio/:Id`} element={<HangmanGame />} /> */}
          <Route path={`portfolio/pass-generator`} element={<PassGenerator />} />
          <Route path={`portfolio/hangman-game`} element={<HangmanGame />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;