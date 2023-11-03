import app from "../App.module.scss";
import style from "./Stayintouch.module.scss";
// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Hello World', {
//   duration: 4000,
//   position: 'bottom-center',

//   // Styling
//   style: {},
//   className: '',

//   // Custom Icon
//   icon: '👏',

//   // Change colors of success/error/loading icon
//   iconTheme: {
//     primary: '#000',
//     secondary: '#fff',
//   },

//   // Aria
//   ariaProps: {
//     role: 'status',
//     'aria-live': 'polite',
//   },
// });

const Stayintouch = () => {
  return (
    <div className={style.stayintouch}>
      <div className={app.container}>
        <h2>Text me 📧</h2>
        <p>Enter your email address to register to our newsletter subscription!</p>
        <div className={app.inner}>
          <div className={`${app.col} ${style.col}`}>
            <form action=''>
              <input required type="email" placeholder="Your Email"/>
              <textarea required name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
              <input className={app.btn} type="submit" value="Subscription" />
            </form>
            {/* <Toaster /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stayintouch