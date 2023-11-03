import { useState } from 'react';
import app from '../App.module.scss';
import style from './Portfolio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  const [cards, setCards] = useState([
    {
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Hangman Game'
    },
    {
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Hangman Game'
    },
    {
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Hangman Game'
    },
    {
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Hangman Game'
    },
    {
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Hangman Game'
    },
  ])
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Portfolio</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              {
                cards.map((i, v) => {
                  return (
                    <a key={v} className={style.card}>
                      <div className={style.img}>
                        <img src={i.img} />
                        <div className={style.play}>
                          <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                      </div>
                      <div className={style.text}>
                        <h4>{i.text}</h4>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio