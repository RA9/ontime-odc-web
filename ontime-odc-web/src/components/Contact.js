import React,{useEffect, useState} from 'react'
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
    <div className='bg-gray-300'>
        <header>
           <NavBar/>
          </header>
             <div id="section1" className='sm:flex sm:flex-col m-4 justify-center items-center'>
             <h1 className='text-center sm:text-4xl text-2xl text-orange-600 font-bold m-4 sm:m-2'>Send Message</h1>
             <form className='sm:p-4 p-2 rounded-lg shadow-md bg-white sm:w-62 sm:w-full sm:max-w-md sm:m-8'>
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
          
        <Footer/>
    </div>
  )
}

export default Contact
