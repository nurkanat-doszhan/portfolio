import { useState, useEffect } from 'react'
import './Quotes.scss'

const Quotes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'YhTfjIzpSu/fLIYChVk2Wg==j6WkYLFU4OLy7kfC',
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error:', error));
  }, []);
  return (
    <div className="quotes">
      <div className="container">
        <h2>Random Quotes 📜</h2>
        <div className="inner">
          <div className="col">
            {data.map((item, value) => (
              <p key={value}>{item.quote} - <br /><b>{item.author}</b></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes;