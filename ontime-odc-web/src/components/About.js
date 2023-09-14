import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import {AiOutlineArrowDown} from 'react-icons/ai'

const About = () => {
  

    const Data = [
        {
            name: 'Josephine P. Holder',
            image: '/images/Josephine.png',
            text: "I am a developer.",
        },
        {
            name: 'Johnny Kpehe',
            image: '/images/migee.png',
            text: "I am a developer.",
        },
        {
            name: 'Princess Washington',
            image: '/images/princess.png',
            text: "I am a developer.",
        },
        {
          name: 'Logic',
          image: '/images/logic.png',
          text: "I am a developer.",
      },
        {
            name: 'Dev Iskalo',
            image: '/images/David.png',
            text: "I am a developer.",
        }
    ]


    function UserProfile({name,image,text}){

        return(
            <div className=' justify-items-center  block sm:p-2 m-2 rounded-xl'>
               <div className='shadow-2xl rounded-2xl p-4  text-center'>
               <img className='m-auto rounded-full outline outline-offset-2 outline-white' src={image} alt="user img" width="200" height="200"/>
                 <h1 className='text-xl text-center font-bold p-2 text-orange-600'>{name}</h1>
                 <p className=' text-center text-white'>{text}</p>
               </div>
            </div>
        )
    }

  return (
    <div className='bg-slate-300 '>
      <header>
        <NavBar/>
      </header>
      <div className='sm:flex block justify-center shadow-2xl sm:p-16 rounded-2xl  sm:m-12 m-2 bg-slate-200 '>
      <div className=' sm:w-[1500px] bg-gray-300 sm:p-8 p-4 sm:rounded-2xl'>
        <img  src='/images/Ontime2.png' width='700'  alt='img' className='m-auto w-[200px] rounded-lg shadow-2xl'/>
         </div>
         <div className='sm:p-8 p-2 m-4 '>
        <p className='sm:text-2xl text-xl'>OnTime visitor management app is to provide a comprehansive solution for managing visitors entering and exiting the Orange Digital Center(ODC).
        The app aims to enhance the visitor registration process, improve security, and offer insight through the visitor tricking. </p>

        <div className='sm:block flex'>
           <h1 className='sm:mt-12 mt-4 sm:text-2xl font-bold '>Download</h1><AiOutlineArrowDown className='text-xl animate-bounce w-6 h-6'/>
          <Link to='/download'><button className='bg-orange-600 rounded-2xl text-white shadow-xl sm:text-xl text-center p-2 sm:m-8 m-2'>Apple Store</button></Link>
          <Link to='/download'><button className='bg-orange-600 rounded-2xl text-white shadow-xl sm:text-xl text-center p-2 sm:m-8 m-2'>Play Store</button></Link>
        </div>
    </div>
  </div>
  <h1 className='text-center font-bold sm:text-5xl text-4xl'>Meet Our Team</h1>
     <div className='grid sm:grid-cols-3 smp-8 sm:m-8 rounded-2xl m-2 bg-slate-950'>
          {
            Data.map((item, index)=> (
                <div key={index}>
                  <UserProfile
                    name={item.name} 
                    text={item.text} 
                    image={item.image}/>
                </div>
            ))
          }
     </div>
      <Footer/>
    </div>
  )
}

export default About
