import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [quote , setQuote] = useState({})
  const [loading ,setLoading] = useState(true)
  let [countdown,setCountDown] = useState(10)
  useEffect(()=>{
    const fetchQuotes = async()=>{
      const res = await fetch('https://api.quotable.io/random')
      const response= await res.json()
      setQuote(()=>(response))
      setLoading(false)
    }
    const count = setInterval(() => {
        setCountDown((prev)=>(
          prev-1
        ))
      
    }, 1000);
    const interval =  setInterval(() => {
      setCountDown(10)
      count
      fetchQuotes()
    }, 10000);
    const time = setTimeout(() => {
      fetchQuotes()
      interval
    }, 1000);
    return ()=>{
      clearTimeout(time);
      clearInterval(interval);
      clearInterval(count);
  }
  },[])

  const handleClick = (e)=>{
    e.preventDefault()
    setButtonQuote(()=>{
      return "clicked"
    })
  }
  console.log(countdown)
  return (
    <div className="App">
      {loading? <h1>loading...</h1>:
      <div className="container">
         <span>{quote.length}</span>
          <p>{quote.content}</p>
          <h1>{quote.author}</h1>
          <span>{countdown}s remaning</span>
      </div>}
      </div>
  )
}

export default App
