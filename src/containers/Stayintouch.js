import './Stayintouch.scss'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Stayintouch = () => {
  return (
    <div className="stayintouch">
      <div className="container">
        <h2>Stay In Touch</h2>
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