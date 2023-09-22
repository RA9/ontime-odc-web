import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [handBugger, setHandBugger] = useState(false);

    const handleClick = () => {
        setHandBugger(!handBugger)
    }
  return (
    <div>
    <header className='sm:flex justify-between p-4 bg-black'>
    <div className='bg-gray-200 sm:p-2 p-2 max-w-4xl  rounded-xl'>
        <Link to='/'><img  src='/OntimeLogo.png' width='150' height='100' alt='img'/></Link>
    </div>
         <div  className=''>
         <nav >
         <ul className='hidden sm:flex p-2 text-white'>
           <li className='m-2 text-xl active:underline'>
              <Link to="/about">About</Link>
           </li>
           <li className='m-2 text-xl'>
           <Link to="/contact">Contact Us</Link>
           </li>
           <li className=' ml-10 mr-10 text-xl bg-orange-500 p-2 pl-4 pr-4 hover:border-white rounded-xl'>
           <Link to='/download'>Download</Link>
           </li>
         </ul>
       </nav>
         </div>
         
      
         {/** This is the mobile section  */}
      <div className='sm:hidden'>
          {!handBugger ? (<div className='m-4'>
          <FaBars size={33} color='white' onClick={()=> setHandBugger(true)}/>
          </div>):
          ( <div
              className='relative top-0 left-0  bottom-0 justify-center items-center 
              w-80 h-screen bg-black ease-in-out duration-400 text-center' 
          >
          <FaTimes className='text-left ' size={33} color='white' onClick={()=>setHandBugger(false)}/>
          <nav className=''>
          <ul className='mt-16 p-4 text-white'>
              <li className='m-2 text-xl'>
              <Link to='/about' onClick={()=> setHandBugger(false)}>About</Link>
              </li>
              <li className='m-2 text-xl'>
              <Link to='/contact' onClick={()=> setHandBugger(false)}>Contact Us</Link>
              </li>
              <li className=' ml-10 mr-10 text-xl bg-orange-500 p-2 pl-4 pr-4 hover:font-bold rounded-xl'>
              <Link to='/contact' onClick={()=> setHandBugger(false)}>Download</Link>
              </li>
        </ul>
          </nav>
      </div>
          )}
          </div>
    </header>
    </div>
  )
}

export default NavBar
