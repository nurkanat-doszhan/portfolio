import app from '../App.module.scss';
import style from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Portfolio</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <div className={style.text}>
                <h3>What Service You Will Get From Me</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio