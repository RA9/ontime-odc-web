import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
// import {Link} from 'react-router-dom'

const Home = () => {
    const [handBugger, setHandBugger] = useState(false);

    const handleClick = () => {
        setHandBugger(!handBugger)
    }

    // const navRef = useRef()

    // const showNavbar = () =>{
    //   navRef.current.classList.toggle("responsive_nav")
    // }

  return (
    <div>
      <header className='sm:flex block justify-between p-4 bg-black'>
      <div className='bg-white sm:p-4 p-2 max-w-4xl  rounded-xl'>
       <img  src='/OntimeLogo.png' width='150' height='100' alt='img'/> 
      </div>
           <div  className=''>
           <nav >
           <ul className='hidden sm:flex p-2 text-white'>
             <li className='m-2 text-xl'>
               About
             </li>
             <li className='m-2 text-xl'>
               Contact
             </li>
             <li className=' ml-10 mr-10 text-xl bg-orange-500 p-2 pl-4 pr-4 hover:border-white rounded-xl'>
               DownLoad
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
                className='absolute top-0 left-0  bottom-0 justify-center items-center 
                w-80 h-screen bg-black ease-in-out duration-300 text-center' 
            >
            <FaTimes className='text-left m-4' size={33} color='white' onClick={()=>setHandBugger(false)}/>
            <nav className=''>
            <ul className='mt-16 p-4 text-white'>
                <li className='m-2 text-xl'>
                About
                </li>
                <li className='m-2 text-xl'>
                Contact
                </li>
                <li className=' ml-10 mr-10 text-xl bg-orange-500 p-2 pl-4 pr-4 hover:font-bold rounded-xl'>
                DownLoad
                </li>
          </ul>
            </nav>
        </div>
            )}
            </div>
      </header>
      {/** This is the body section  */}
      <div className='sm:m-20 sm:text-8xl text-xl'>
       <h1>This is the body section</h1>
      </div>

      {/** This is the footer section  */}

      <div className='bg-black text-white p-4'>
      <footer>
          <div className='sm:flex justify-between'>
          <div  className='flex items-center '>
          <div>
             <img  className='rounded-xl m-auto mr-4' src='/apple.png' width='50' height='50' alt='img' />
             <h1>Apple</h1>
       </div>
     <div>
     <img className='bg-white sm:w-10 sm:h-10 p-2 rounded-xl m-auto' src='/Playstore.png' width='50' height='30' alt='img' />
     <h1>PlayStore</h1>
   </div>
       </div>
       <div  className='flex  items-center grid-rows-3 grid-flow-row justify-between'>
       <div>
          <img className='rounded-xl m-2' src='/facebook.png' width='110' height='50' alt='img' />
    </div>
  <div>
  <img className=' m-2' src='/github.png' width='60' height='50' alt='img' />
</div>
<div className='sm:w-10'>
<img src='/instergram.png' width='80' height='50' alt='img' />
</div>
    </div>
          </div>
        <div className='text-center sm:text-xl'>
          {/* Add your footer content here */}
          &copy; OnTime 2023. All right reserved
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home
