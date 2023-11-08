import { useParams } from "react-router-dom";
import app from '../../App.module.scss';
import style from '../projects/PassGenerator.module.scss';

const PassGenerator = () => {
  console.log(useParams());
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Password Generator</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <input type="text" id="length" name="length" value="j13Xh@=0" disabled />
              <div className={style.params}>
                <label htmlFor="lc" className={style.active}>
                  <input id="lc" type="checkbox"/> Lowercase
                </label>
                <label htmlFor="uc">
                  <input id="uc" type="checkbox"/> Uppercase
                </label>
                <label htmlFor="num">
                  <input id="num" type="checkbox"/> Number
                </label>
                <label htmlFor="sc">
                  <input id="sc" type="checkbox"/> Special Char
                </label>
              </div>
              <button className={app.btn}>Generate Password!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PassGenerator;