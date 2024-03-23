import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import app from '../../App.module.scss';
import style from '../projects/PassGenerator.module.scss';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const PassGenerator = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(5);
  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [sc, setSc] = useState(false);
  const [copyPass, setCopyPass] = useState(false);

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
    let empty = '';

    let symbols = []
    if (lc) symbols.push(regLc);
    if (uc) symbols.push(regUc);
    if (num) symbols.push(regNum);
    if (sc) symbols.push(regSc);
    
    const getRandom = () => {
      let elem1;
      let elem2;
      for (let i = 0; i < passLength; i++) {
        elem1 = Math.floor(Math.random() * symbols.length);
        for (let k = 0; k < symbols[elem1].length; k++) {
          elem2 = Math.floor(Math.random() * symbols[elem1].length)
        }
        empty += symbols[elem1][elem2]
      }
      setPassword(empty)
    }
    getRandom();
  }

  const copyToClipboard = () => {
    notifyCopy();
    navigator.clipboard.writeText(password);
  }

  const notifyCopy = () => toast.success('Copied to clipboard!', {
    duration: 1300,
    position: 'top-center',
  });

  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Password Generator</h2>
        <div className={app.inner}>
          <div className={app.col}>
            <div className={style.flex}>
              <div className={style.pass}>
                <input type="text" id="length" name="length" value={password} disabled />
                {
                  password != '' &&
                  <span className={style.btnCopy} onClick={copyToClipboard}><FontAwesomeIcon icon={faCopy} /></span>
                }
              </div>
              <input type="number" defaultValue={passLength} min={5} max={20} onChange={e => setPassLength(e.target.value)} />
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
          <Toaster />
        </div>
      </div>
    </>
  )
}

export default PassGenerator;