import app from '../../../App.module.scss';
import style from '../../projects/SchulteTable/SchulteTable.module.scss';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const Game = () => {
  
  const [currentNumber, setCurrentNumber] = useState(1);
  const [matrix, setMatrix] = useState([
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 24, 25 ]);

  let shuffle = (matr) => {
    matr.sort(() => Math.random() - 0.5);
  }

  shuffle(matrix);

  let randomColor = x => {
    return Math.floor(Math.random() * x);
  }

  const btnClick = x => {
    let i = Number(x);
    if(i == currentNumber) {
      setCurrentNumber(currentNumber + 1);
    } if (i == 25) {
      Swal.fire({
        title: 'Good job!',
        text: 'Completed!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      setCurrentNumber(1)
    } else {
      return 
    }
  }

  return (
    <>
      <div className={style.flex}>
        <div>
          Find: <b>{ currentNumber }</b>
        </div>
      </div>
      <div className={style.game}>
        {
          matrix.map((i, v) => {
            return (
              <button
                onClick={v => btnClick(v.target.innerText)}
                style={{
                  backgroundColor:
                  `rgba(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)}, 0.8)`
                }}
                key={v}>{i}</button>
            )
          })
        }
      </div>
      <p>Hints: Click on box which contains the "Find" number!</p>
    </>
  )
}

const SchulteTable = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Schulte Table</h2>
        <div className={app.inner}>
          <div className={`${app.col} ${style.col}`}>
            {
              !start ? <a className={app.btn} onClick={() => setStart(true)} role="button">Start</a>
              : <Game />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SchulteTable;