import './Stayintouch.scss'
import toast, { Toaster } from 'react-hot-toast';

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
        <h2>Text me 📧</h2>
        <p>Enter your email address to register to our newsletter subscription!</p>
        <div className="inner">
          <div className="col">
            <form action=''>
              <input type="email" required placeholder="Your Email"/>
              <textarea name="" required placeholder="Your Message" id="" cols="30" rows="10"></textarea>
              <a className='btn' onClick={notify} role='button'>Subscription</a>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stayintouch