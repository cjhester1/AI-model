import React from 'react'
import Hero from './components/Hero' //Hero component where title is displayed and navbar
import Demo from './components/Demo' //Demo component where we make api call and process call
import "./App.css" //Main Styles for entire application

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
        {/* gradient added from App.css file , used chat GPT to generate several gradients. 
        To change it simply plug in this code below to chat GPT and prompt for different variations

    background-image: radial-gradient(
    at 27% 37%,
    hsla(10, 100%, 60%, 1) 0px,
    transparent 0%
  ),
  radial-gradient(at 97% 21%, hsla(30, 100%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 52% 99%, hsla(50, 100%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 10% 29%, hsla(70, 100%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 97% 96%, hsla(90, 100%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 33% 50%, hsla(110, 100%, 60%, 1) 0px, transparent 50%),
  radial-gradient(at 79% 53%, hsla(130, 100%, 60%, 1) 0px, transparent 50%);
        */}
      </div>

      <div className='app'>
      <Hero/>
        <Demo/>
        
      </div>
    </main>
  )
}

export default App