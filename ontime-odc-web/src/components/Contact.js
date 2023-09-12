import React,{useEffect, useState} from 'react'
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Contact = () => {

  const [email, setEmail]=useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError(''); // Clear the error message
    }
  };
  
  console.log()

  useEffect(() =>{
   const smoothScroll =(event)=>{
     event.preventDefault();
     const targetId = event.target.getAttribute('href').substring(1);
     const targetElement = document.getElementById(targetId);
     if(targetElement){
      window.scrollTo({
        top:targetElement.offsetTop,
        behavior:'smooth',
      });
     }
   }
   const link = document.querySelectorAll('a[href^="#"]');
   link.forEach((link) =>{
    link.addEventListener('click', smoothScroll)
   })
  },[])
     
  return (
    <div>
        <header>
           <NavBar/>
          </header>
              <div className=' bg-slate-300 '>
                <h1 className='text-center sm:text-6xl text-2xl font-bold sm:m-8'>Contact Us</h1>
                <div   className='sm:flex block p-2'>
                  <div className='m-4 sm:p-4 shadow-xl bg-white rounded-2xl p-2'>
                    <BsTelephoneForwardFill className="sm:text-4xl text-2xl"/>
                    <h2 className='font-bold text-orange-600 text-center sm:text-2xl'>Talk with the Developer</h2>
                     <p className='sm:p-2'>With these following contacts you can have a chance to talk with the developer of this app.</p>
                     <p className='sm:p-2 m-2 shadow-2xl font-bold'>0770430026 / 0555655381</p>
                    </div>
                    <div className='m-4 sm:p-4 shadow-xl bg-white rounded-2xl p-2'>
                    <BiSolidMessageRoundedDetail className="sm:text-6xl text-2xl"/>
                    <h2 className='font-bold text-orange-600 text-center sm:text-2xl'>Send a text the Developer</h2>
                     <p>Send a message by filling up the form with your information.</p>
                     <button  className='bg-orange-500 sm:m-8 p-2 rounded-xl font-bold text-white text-xl hover:text-black'><a href='#section1'>Message</a></button>
                  </div>
                </div>
             </div>
             <div id="section1" className='min-h-screen bg-gray-300 sm:flex sm:flex-col m-4 justify-center items-center'>
             <h1 className='text-center sm:text-4xl text-2xl text-orange-700 m-4 sm:m-8'>Send Message</h1>
             <form className='sm:p-8 p-4 rounded-lg shadow-md bg-white sm:w-62 sm:w-full sm:max-w-md sm:m-8'>
               <div className='mb-6'>
                 <label htmlFor='name' className='block text-xl font-bold mb-2'>
                   Name
                 </label>
                 <input
                   className='bg-gray-200 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300'
                   type='text'
                   id='name'
                   name='name'
                   placeholder='Enter your name here'
                 />
               </div>
               <div className='mb-6'>
                 <label htmlFor='email' className='block text-xl font-bold mb-2'>
                   Email
                 </label>
                 <input
                   className='bg-gray-200 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300'
                   type='email'
                   id='email'
                   name='email'
                   onChange={(e) => setEmail(e.target.value)}
                   onBlur={validateEmail}
                   placeholder='Enter your email here'
                 />
                 {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
               </div>
               <div className='mb-6'>
                 <label htmlFor='message' className='block text-xl font-bold mb-2'>
                   Message
                 </label>
                 <textarea
                   className='bg-gray-200 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300'
                   id='message'
                   rows='8' // Increased height
                   name='message'
                   placeholder='Enter your message here'
                 />
               </div>
               <button type='submit' className='p-3 m-4 bg-orange-600 rounded-xl sm:pl-8 sm:pr-8 text-white font-bold sm:text-xl'>
                 Send
               </button>
             </form>
           </div>
           
          <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
