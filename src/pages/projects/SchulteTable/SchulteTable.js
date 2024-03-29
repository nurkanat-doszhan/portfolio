import app from '../../../App.module.scss';
import style from '../../projects/SchulteTable/SchulteTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Table = () => {
  let matrix = [1, 2, 3, 4, 5]
  matrix.map((i, v) => {
    return (
      <button key={v}>{i}</button>
    )
  })
  // return matrix
}

const Game = (props) => {
  // let start = 2;
  // let timer = setInterval(() => {
  //   // start+1;
  //   return start;
  // }, 1000);
  return (
    <>
      <div className={style.flex}>
        <div>
          Time: {
            // timer
          }
        </div>
        <div>
          Next: { props.num }
        </div>
      </div>
      <div>
        <Table />
      </div>
      <p>Hints: Click on box which contains the "Next" number!</p>
    </>
  )
}

const SchulteTable = () => {
  const [start, setStart] = useState(false);
  const [nextNumber, setNextNumber] = useState(1);

  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Schulte Table</h2>
        <div className={app.inner}>
          <div className={`${app.col} ${style.col}`}>
            {
              !start ? <a className={app.btn} onClick={() => setStart(true)} role="button">Start</a>
              : <Game num={nextNumber} />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SchulteTable;