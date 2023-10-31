import './Stayintouch.scss'
import toast, { Toaster } from 'react-hot-toast';
// const myPromise = fetchData();

// toast.promise(myPromise, {
//   loading: 'Loading',
//   success: 'Got the data',
//   error: 'Error when fetching',
// });

const notify = () => toast('Hello World', {
  duration: 4000,
  position: 'bottom-center',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: '👏',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});

const Stayintouch = () => {
  return (
    <div className="stayintouch">
      <div className="container">
        <h2>Stay In Touch 📧</h2>
        <p>Enter your email address to register to our newsletter subscription!</p>
        <div className="inner">
          <div className="col">
            <input type="text" placeholder="Your Name"/>
            <a className='btn' onClick={notify} role='button'>Subscription</a>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stayintouch