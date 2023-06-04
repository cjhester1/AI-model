import React from 'react'
import { tick } from "../assets"; //logo to be imported

const Hero = () => {
  return (
  

  /*
  Utilizing tailwindCSS for classnames..for ref of what each class name does
  go to https://v2.tailwindcss.com/docs and type in the desired className in search field
  */
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      {/* <img src={tick} alt='sumz_logo' className='w-28 object-contain' /> */}
  
      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/cjhester1/ai-model", "_blank")
        }
        className='shadow-2xl  blue_btn'
      >
        {/* When a user clicks the button ==> link directly to my github repo page */}
        Github
      </button>
    </nav>

    <h1 className=' blue_gradient head_text'>
  SkimAI 🏃🏽💨 <br className='max-md:hidden' />
      <span className='  green_gradient '>Summarize Anything.</span>
    </h1>
    {/* Gradient generated from chat-GPT..added the class into App.css file under Tailwind styles */}
    <h2 className='desc'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Convallis convallis tellus id interdum velit laoreet id donec. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Sit amet dictum sit amet justo donec enim diam vulputate. Mi proin sed libero enim sed faucibus turpis in. Congue eu consequat ac felis donec et odio pellentesque diam. Egestas fringilla phasellus faucibus scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh sed.
    </h2>
    {/* Lorem ipsum placeholder for describing what AI API does */}
  </header>
  )
}

export default Hero