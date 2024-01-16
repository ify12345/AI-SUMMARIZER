import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full justify-center flex flex-col items-start">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="AI" className='w-28 object-contain'/>
        <button type='submit' onClick={()=>{window.open('https://github.com/ify12345/AI-SUMMARIZER')}} className="black_btn">GitHub</button>
      </nav>
    </header>
  )
}

export default Hero