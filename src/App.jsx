import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [quote , setQuote] = useState({})
  const [loading ,setLoading] = useState(true)
  useEffect(()=>{
    const fetchQuotes = async()=>{
      const res = await fetch('https://api.quotable.io/random')
      const response= await res.json()
      setQuote(()=>(response))
      setLoading(false)
    }
    const interval =  setInterval(() => {
      fetchQuotes()
    }, 10000);
    const time = setTimeout(() => {
      fetchQuotes()
      interval
    }, 1000);
    return ()=>{
      clearTimeout(time);
      clearInterval(interval);
  }
  },[])

  const handleClick = (e)=>{
    e.preventDefault()
    setButtonQuote(()=>{
      return "clicked"
    })
  }

  return (
    <div className="App">
      {loading? <h1>loading...</h1>:
      <div className="container">
         <span>{quote.length}</span>
          <p>{quote.content}</p>
          <h1>{quote.author}</h1>
      </div>}
      </div>
  )
}

export default App
