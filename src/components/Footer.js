import "./Footer.scss";
// import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

// const dateTime = () => {
//   const currentdate = new Date();
//   const currentTime = () => {
//     let datetime = "" + currentdate.getHours() + ":"
//     + ((currentdate.getMinutes().toString()).length === 2 ? currentdate.getMinutes() : '0'+currentdate
//     .getMinutes()) + ":"
//     + ((currentdate.getSeconds().toString()).length === 2 ? currentdate.getSeconds() : '0'+currentdate
//     .getSeconds());
//     return datetime;
//   }
//   let timerId = setInterval(currentTime, 1000);
//   // setInterval(() => {
//   //   return datetime;
//   // }, 900);

//   return timerId;
// }

const Footer = () => {
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
            <small>clock</small>
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