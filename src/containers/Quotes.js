import { useState, useEffect } from 'react'
import './Quotes.scss'

const Quotes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const categ = ['amazing', 'art', 'attitude', 'beauty', 'best',
      'business', 'change', 'communications', 'computers', 'cool',
      'courage', 'design', 'dreams', 'education', 'experience',
      'failure', 'famous', 'fitness', 'freedom', 'friendship',
      'funny', 'future', 'good', 'great', 'happiness', 'health',
      'history', 'home', 'hope', 'humor', 'imagination',
      'intelligence', 'knowledge', 'leadership', 'learning',
       'life','love', 'men', 'money', 'movies', 'success']
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + categ[Math.floor(Math.random() * categ.length)], {
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