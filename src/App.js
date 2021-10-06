import React, {useState, useEffect} from 'react'
import Quote from './components/Quote'
import COLORS from './colors'

const App = () => {
  const [quoteArray, setQuoteArray] = useState([])
  const [quote, setQuote] = useState({
    content: '',
    author: ''
  })
  const [fadeState, setFadeState] = useState('fade-in')
  const [fadeTransition, setFadeTransition] = useState(null)
  const [color, setColor] = useState('')
  const FADE_DURATION = 1000

  useEffect(() => {
    const quoteLimit = 20
    const totalQuote = 2000
    const pageMax = Math.floor(totalQuote / quoteLimit)
    const page = Math.floor(Math.random() * (pageMax)) + 1

    const getQuoteData = async() => {
      fetch(`https://api.quotable.io/quotes?limit=${quoteLimit}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setQuoteArray(data.results)
      })
      .catch(err => alert("Internet connection error"))
    }
    getQuoteData()
  }, [])

  useEffect(() => {
    getNewQuote();
  }, [quoteArray])

  const getNewQuote = () => {
    if (quoteArray.length === 0) 
      return;
    const timeOutId = setTimeout(() => {
      const {content, author} = quoteArray[Math.floor(Math.random() * quoteArray.length)]
      setQuote({
        content,
        author
      })
      setFadeState('fade-in')
      setFadeTransition(null)
    }, FADE_DURATION/2)


    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    setColor(randomColor)

    clearTimeout(fadeTransition)
    setFadeTransition(timeOutId)
    setFadeState('fade-out')
  }

  return (
    <Quote
      quote={quote} mainColor={color} 
      getNewQuote={getNewQuote} 
      fadeDuration={FADE_DURATION}
      fadeState={fadeState}
    />
  )
}

export default App
