import app from '../../../App.module.scss';
import style from '../../projects/HangmanGame/HangmanGame.module.scss';
import { useEffect, useState } from "react";

const HangmanGame = () => {
  const [word, setWord] = useState(null);
  let w = [];

  useEffect(() => {
    setWord(w)
  }, [])

  const [question] = useState([
    {q: 'A nocturnal flying mammal', a: 'bat'},
    {q: 'A sweet, sticky substance made by bees', a: 'honey'},
    {q: 'A cold-blooded reptile often kept as a pet', a: 'snake'},
    {q: 'A fast-swimming marine mammal with sharp teeth', a: 'dolphin'},
    {q: 'A warm, comforting beverage often made from tea leaves', a: 'chai'},
    {q: 'A delicious, creamy dairy product often used in desserts', a: 'cream'},
    {q: 'A sweet, sticky substance used to sweeten food and drinks', a: 'sugar'},
    {q: 'A delicious, circular baked good often topped with icing', a: 'doughnut'},
    {q: 'A tropical fruit with a tough outer shell and sweet flesh', a: 'coconut'},
  ])

  let randomQ = Math.floor(Math.random() * question.length);

  const Letters = () => {
    let letters = [];
    for (let i = 0; i < question[randomQ].a.length; i++) {
      w.push(question[randomQ].a[i]);
      console.log(question[randomQ].a[i])
      letters.push(<div className={style.letter}><div>{question[randomQ].a[i]}</div></div>);
    }
    return letters;
  }

  const keyDown = (keyCode) => {
    console.log(w)
    for (let i = 0; i < question[randomQ].a.length; i++) {
      keyCode == question[randomQ].a[i] ?
      console.log(question[randomQ].a[i]) :
      console.warn('#')
    }
  }

  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Hangman game</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.gallows}>
              <div className={`${style.line} ${style.rope}`}></div>
              <div className={`${style.line} ${style.top}`}></div>
              <div className={`${style.line} ${style.center}`}></div>
              <div className={`${style.line} ${style.bottom}`}></div>
              <div className={`${style.line} ${style.head}`}></div>
              <div className={`${style.line} ${style.body}`}></div>
              <div className={`${style.line} ${style.lHand}`}></div>
              <div className={`${style.line} ${style.rHand}`}></div>
              <div className={`${style.line} ${style.lFoot}`}></div>
              <div className={`${style.line} ${style.rFoot}`}></div>
            </div>
            <div className={style.question}>
              Question: { question[randomQ].q }
            </div>
            <div className={style.words}>
              <Letters />
            </div>
            <div className={style.keyboard}>
              <button onClick={() => keyDown('a')}>a</button>
              <button onClick={() => keyDown('b')}>b</button>
              <button onClick={() => keyDown('c')}>c</button>
              <button onClick={() => keyDown('d')}>d</button>
              <button onClick={() => keyDown('e')}>e</button>
              <button onClick={() => keyDown('f')}>f</button>
              <button onClick={() => keyDown('g')}>g</button>
              <button onClick={() => keyDown('h')}>h</button>
              <button onClick={() => keyDown('i')}>i</button>
              <button onClick={() => keyDown('j')}>j</button>
              <button onClick={() => keyDown('k')}>k</button>
              <button onClick={() => keyDown('l')}>l</button>
              <button onClick={() => keyDown('m')}>m</button>
              <br/>
              <button onClick={() => keyDown('n')}>n</button>
              <button onClick={() => keyDown('o')}>o</button>
              <button onClick={() => keyDown('p')}>p</button>
              <button onClick={() => keyDown('q')}>q</button>
              <button onClick={() => keyDown('r')}>r</button>
              <button onClick={() => keyDown('s')}>s</button>
              <button onClick={() => keyDown('t')}>t</button>
              <button onClick={() => keyDown('u')}>u</button>
              <button onClick={() => keyDown('v')}>v</button>
              <button onClick={() => keyDown('w')}>w</button>
              <button onClick={() => keyDown('x')}>x</button>
              <button onClick={() => keyDown('y')}>y</button>
              <button onClick={() => keyDown('z')}>z</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HangmanGame;