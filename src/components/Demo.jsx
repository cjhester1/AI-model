import React from 'react'
import { useState,useEffect } from 'react'
import {copy,linkIcon,loader,tick} from "../assets"
const Demo = () => {
/*
useState to keep track of current article value.


setArticle function sets article value to the one
that is passed into the function (inside the text input field)
*/

  const[article,setArticle] = useState({
url: "",
summary:"",


  });
/*
handleSubmit function is async function (will come back to clarify in future commits)
takes in an event (form being submitted) and once it does thats when we'll make
our api call (coming in future commit)
*/
  const handleSubmit = async (e) => {

alert('Submitted');

  }
  return (
    <section className='mt-16 w-full max-w-xl'>
<div className='flex flex-col w-full gap-2'>
{/* on submit of form passing a reference to our function handleSubmit to api call */}
<form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
  {/* Link icon, subject to change */}
<img className='absolute left-0 my-2 ml-3 w-5' src= {linkIcon} alt = 'link_icon'/>
{/*  search bar where url will be placed  */}
<input type= "url" placeholder='Enter Url' value= {article.url} onChange={(e)=>setArticle({...article, url: e.target.value
})} required className='url_input peer'></input>
<button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >

  ➡️
</button>
</form>
{/* Here'es where we are going to put the URL History */}

</div>

{/*  we are going to display the content returned of our api call */}

    </section>
  )
}

export default Demo