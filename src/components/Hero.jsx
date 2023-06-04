import React from 'react'
import { tick } from "../assets";

const Hero = () => {
  return (
   
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      {/* <img src={tick} alt='sumz_logo' className='w-28 object-contain' /> */}
  
      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/cjhester1/ai-model", "_blank")
        }
        className='shadow-2xl  black_btn'
      >
        GitHub
      </button>
    </nav>

    <h1 className='  head_text green_gradient'>
  RapidRecap <br className='max-md:hidden' />
      <span className='  orange_gradient '>Speedy Article Summaries.</span>
    </h1>
    <h2 className='desc'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Convallis convallis tellus id interdum velit laoreet id donec. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Sit amet dictum sit amet justo donec enim diam vulputate. Mi proin sed libero enim sed faucibus turpis in. Congue eu consequat ac felis donec et odio pellentesque diam. Egestas fringilla phasellus faucibus scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh sed.
    </h2>
  </header>
  )
}

export default Hero