import "./Footer.scss";
// import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react";

// const dateTime = () => {
//   let timerId
//   setInterval(() => {
//     timerId = h + ':' + m + ':' + s;
//     if (h.toString().length == 1) {
//       timerId = '0' + h + ':' + m + ':' + s;
//     } else if (m.toString().length == 1) {
//       timerId = h + ':' + '0' + m + ':' + s;
//     } else if (s.toString().length == 1)  {
//       timerId = h + ':' + m + ':' + s;
//     }
//     console.log(timerId)
//     return timerId;
//   }, 1000);
// }

const Footer = () => {

  const [time, setTime] = useState()

  useEffect(() => {
    console.log('init')
    let timerId
    setInterval(() => {
      const currentTime = new Date()
      let h = currentTime.getHours()
      let m = currentTime.getMinutes()
      let s = currentTime.getSeconds()
      timerId = h + ':' + m + ':' + s
      setTime(timerId)
      console.log(time)
      // return time
    }, 1000)
  }, [time])

  // console.warn(dateTime())
  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="col">
            <a href="https://instagram.com/nurkanatt" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/nurkanat-doszhan/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <br />
            <br />
            <small>© Nurkanat Doshan, 2023</small>
            <br />
            {/* <small>{dateTime()}</small> */}
            <small> clock</small>
          </div>
          <div className="col">
            <img className="logo" src="logow.webp" />
          </div>
          <div className="col">
            <a className="mail" href="mailto:nurkanat.doszhan@gmail.com">nurkanat.doszhan@gmail.com</a>
          </div>
        </div>
      </div>
      <p>Made by Me</p>
    </footer>
  )
}

export default Footer