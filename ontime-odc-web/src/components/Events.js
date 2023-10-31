import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { eventsData } from './EventData'

const Contact = () => {

 const  Data = eventsData;
  

function Event({photo, eventName, eventDate, description, button })
{
  return(
  <div className='sm:flex align-middle border-2 border-orange-600  m-2'>
<div className='p-2 text-center'>
{/* <img className='m-auto rounded-xl' src={photo} alt="user img" width="200" height="100"/> */}
<h1 className='text-xl text-center font-bold p-4'>{eventName}</h1>
<h2>{eventDate}</h2>
<h3>{description}</h3>

</div>
  </div>
)
  }

  return (
    <div>
        <header>
           <NavBar/>
          </header>
         
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative m-10 w-80">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search" required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
    </div>
</form>

<div className='flex flex-col border-2 border-black  sm:flex align-center justify-center sm:p-8 m-4 sm:m-10'>
  {
    Data.map((item, index)=> (
      <div key={index}>
        <Event eventName={item.eventName} eventDate={item.eventDate} description={item.description}
        />
        
        </div>
    ))
  }
</div>



        
        <Footer/>
      
    </div>
  )
}

export default Contact
