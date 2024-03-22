import { useState } from "react";
import app from "../App.module.scss";
import style from "./Projects.module.scss";

const Projects = () => {

  const [card, setCard] = useState([
    {
      imgSrc: 'portfolio/irakli-kurashvili-fin.jpg',
      text: 'Card Title'
    },
    {
      imgSrc: 'portfolio/leartes-studios-nyc01.jpg',
      text: 'Card Title'
    },
    {
      imgSrc: 'portfolio/matteo-bassini-japanstreet2.jpg',
      text: 'Card Title'
    },
    {
      imgSrc: 'portfolio/wai-kin-lam-av-silentmirrorii.jpg',
      text: 'Card Title'
    }
  ])

  return (
    <div className={style.projects}>
      <div className={app.container}>
        <h2>Portfolio 🚀</h2>
        <div className={app.inner}>
          <div className={`${app.col} ${style.col}`}>
            <div className={style.cards_list}>
              { card.map((i, v) => {
                return (
                  <div key={v} className={style.card}>
                    <div className={style.card_image}>
                      <img src={i.imgSrc} alt='' />
                    </div>
                    <div className={`${style.card_title} ${style.title_white}`}>
                      <p>{i.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
              <a href="/portfolio" className={`${app.btn} ${style.btn}`}>All projects</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;