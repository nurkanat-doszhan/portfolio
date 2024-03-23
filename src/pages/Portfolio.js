import { useState } from 'react';
import app from '../App.module.scss';
import style from './Portfolio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  const [cards, setCards] = useState([
    {
      href: '/portfolio/pass-generator',
      img: '/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg',
      text: 'Password Generator'
    },
    {
      href: '/portfolio/hangman-game',
      img: '/gallery/3D-Render-Style v1_IS4uX6yATvWlXC9Atmb1Iw_8828235.png',
      text: 'Hangman Game'
    },
    {
      href: '#',
      img: '/gallery/Sketch_Graphic-Novel_EP-U1k-pRDOSA86dTT9zKQ_Post-98828206.png',
      text: 'Hangman Game'
    },
    {
      href: '#',
      img: '/gallery/Realistic-SciFi-Conceptt2img_2_1698828265.png',
      text: 'Hangman Game'
    },
    /*{
      href: '#',
      img: '/gallery/Lo-Fi_Concept_Art_Landscape_V_r3ERLiiBDh1FZEm2g.png',
      text: 'Hangman Game'
    },*/
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
                    <NavLink key={v} to={i.href} className={style.card}>
                      <div className={style.img}>
                        <img src={i.img} />
                        <div className={style.play}>
                          <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                      </div>
                      <div className={style.text}>
                        <h4>{i.text}</h4>
                      </div>
                    </NavLink>
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