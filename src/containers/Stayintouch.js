import './Stayintouch.scss'

const Stayintouch = () => {
  return (
    <div className="stayintouch">
      <div className="container">
        <h2>Stay In Touch</h2>
        <p>Enter your email address to register to our newsletter subscription!</p>
        <div className="inner">
          <div className="col">
            <input type="text" placeholder="Your Name"/>
            <a className='btn' role='button'>Subscription</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stayintouch