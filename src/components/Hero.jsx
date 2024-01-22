import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full justify-center flex flex-col items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="AI" className='w-28 object-contain'/>
        <button type='submit' onClick={()=>{window.open('https://github.com/ify12345/AI-SUMMARIZER')}} className="black_btn">GitHub</button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className="max-md:hidden" />
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
        simplify your reading with summairizer, an open source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero