import app from '../../App.module.scss';
import style from '../projects/PassGenerator.module.scss';
import { useState } from "react";

const PassGenerator = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(8);
  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [sc, setSc] = useState(false);

  const toggleCheck = (ch) => {
    switch(ch) {
      case 'lc': setLc(!lc); break;
      case 'uc': setUc(!uc); break;
      case 'num': setNum(!num); break;
      case 'sc': setSc(!sc); break;
    }
  };

  const generatePassword = () => {
    let regLc = 'abcdefghijklmnopqrstuvwxyz';
    let regUc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let regNum = '0123456789';
    let regSc = '~!@#$%^&*()_+=-|.<>[]{}';
    let empty = ''

    if (lc) { empty += regLc[Math.floor(Math.random() * regLc.length)]; }
    if (uc) { empty += regUc[Math.floor(Math.random() * regUc.length)]; }
    if (num) { empty += regNum[Math.floor(Math.random() * regNum.length)]; }
    if (sc) { empty += regSc[Math.floor(Math.random() * regSc.length)]; }
    setPassword(empty)
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
                <input type="number" value={passLength} min={8} max={16} />
              </div>
              <div className={style.params}>
                <label htmlFor="lc" className={lc ? style.active : ''}>
                  <input id="lc" type="checkbox" checked={lc} readOnly onClick={() => toggleCheck('lc')}/> Lowercase
                </label>
                <label htmlFor="uc" className={uc ? style.active : ''}>
                  <input id="uc" type="checkbox" checked={uc} readOnly onClick={() => toggleCheck('uc')}/> Uppercase
                </label>
                <label htmlFor="num" className={num ? style.active : ''}>
                  <input id="num" type="checkbox" checked={num} readOnly onClick={() => toggleCheck('num')}/> Number
                </label>
                <label htmlFor="sc" className={sc ? style.active : ''}>
                  <input id="sc" type="checkbox" checked={sc} readOnly onClick={() => toggleCheck('sc')}/> Special Char
                </label>
              </div>
              <button className={`${app.btn} ${style.btn}`} onClick={() => generatePassword()} disabled={ !lc && !uc && !num && !sc ? true : false }>Generate Password!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PassGenerator;