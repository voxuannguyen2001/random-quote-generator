import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Quote = ({ quote, mainColor, getNewQuote, fadeDuration, fadeState }) => {
  const {content, author} = quote

  const backgroundTransition = {
    backgroundColor: mainColor,
    transition: `background-color ${fadeDuration}ms ease-out`
  }
  const colorTransition = {
    color: mainColor,
    transition: `color ${fadeDuration}ms ease-out`
  }

  const fadeTransition = {
    color: mainColor,
    transition: `color ${fadeDuration}ms ease-out, opacity ${fadeDuration/2}ms ease-out` 
  }
  const fbShareBtn = () => {
    window.FB.ui({
      display: 'popup',
      method: 'share',
      hashTag: '#randomquotes',
      quote: `${content}\n-${author}`,
      href: 'https://voxuannguyen2001.github.io/random-quote-generator/'
    }, function(response){});
  }

  const twitterTweetBtn = () => {
    const url ='https://twitter.com/intent/tweet?text=' + encodeURI(`${(content)}\n-${author}}`)
    console.log(url)
    window.open(url, '_blank').focus()
  }

  return (
    <div className='container' style={backgroundTransition}>
      <div className='quote-box'> 
        <div 
          className={`quote-wrapper fade-wrapper ${fadeState}`} 
          style={fadeTransition} > 
          <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft}/>
          {content}
          <div className='quote-author' style={colorTransition}>- {author}</div>
        </div>
        <div className='quote-btn'>
          <ul className='share-container'>
            <li style={backgroundTransition} onClick={twitterTweetBtn}>
              <FontAwesomeIcon icon={faTwitter} className='share-btn'/>
            </li>
            <li style={backgroundTransition} onClick={fbShareBtn}>
              <FontAwesomeIcon icon={faFacebookF} className='share-btn'/> 
            </li>
          </ul>
          <button style={backgroundTransition} className='new-quote-btn' onClick={getNewQuote}>New quote</button>
        </div>
      </div>
    </div>
  )
}

export default Quote
