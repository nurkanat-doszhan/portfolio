import { useParams } from "react-router-dom";
import app from '../../App.module.scss';
import style from '../projects/PassGenerator.module.scss';
import { useState } from "react";

const PassGenerator = () => {
  // console.log(useParams());
  const [password, setPassword] = useState("casc");
  const [lc, setLc] = useState(true);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [sc, setSc] = useState(false);

  const toggleCheck = (ch) => {
    // if (!lc || !uc || !num || !sc) {
    //   break;
    // }
    
    switch(ch) {
      case 'lc': setLc(!lc); break;
      case 'uc': setUc(!uc); break;
      case 'num': setNum(!num); break;
      case 'sc': setSc(!sc); break;
    }
  };
  const generatePassword = () => {
    setPassword('jfjfjiisis')
  }
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Password Generator</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <div className={style.params}>
                <input type="text" id="length" name="length" value={password} disabled />
                <input type="number" min={8} max={16} />
              </div>
              <div className={style.params}>
                <label htmlFor="lc" className={lc ? style.active : ''}>
                  <input id="lc" type="checkbox" checked={lc} onClick={() => toggleCheck('lc')}/> Lowercase
                </label>
                <label htmlFor="uc" className={uc ? style.active : ''}>
                  <input id="uc" type="checkbox" checked={uc} onClick={() => toggleCheck('uc')}/> Uppercase
                </label>
                <label htmlFor="num" className={num ? style.active : ''}>
                  <input id="num" type="checkbox" checked={num} onClick={() => toggleCheck('num')}/> Number
                </label>
                <label htmlFor="sc" className={sc ? style.active : ''}>
                  <input id="sc" type="checkbox" checked={sc} onClick={() => toggleCheck('sc')}/> Special Char
                </label>
              </div>
              <button className={`${app.btn} ${style.btn}`} onClick={() => generatePassword()}>Generate Password!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PassGenerator;