import app from '../../../App.module.scss';
import style from '../../projects/HangmanGame/HangmanGame.module.scss';
import { useEffect, useState } from "react";

const HangmanGame = () => {

  const [wordCount, setWordCount] = useState()
  const [question, setQuestion] = useState([
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

  useEffect(() => setWordCount(question[randomQ].a.length))

  let createWord = () => {
    let word = '';
    for (let i = 0; i < wordCount; i++) {
      console.log(randomQ)
    }
    return wordCount
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
              {createWord()}
            </div>
            <div className={style.keyboard}>
              <button>a</button>
              <button>b</button>
              <button>c</button>
              <button>d</button>
              <button>e</button>
              <button>f</button>
              <button>g</button>
              <button>h</button>
              <button>i</button>
              <button>j</button>
              <button>k</button>
              <button>l</button>
              <button>m</button>
              <br/>
              <button>n</button>
              <button>o</button>
              <button>p</button>
              <button>q</button>
              <button>r</button>
              <button>s</button>
              <button>t</button>
              <button>u</button>
              <button>v</button>
              <button>w</button>
              <button>x</button>
              <button>y</button>
              <button>z</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HangmanGame;