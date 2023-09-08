import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

const About = () => {
  

    const Data = [
        {
            name: 'Josephine P. Holder',
            image: '/images/Josephine.png',
            text: "I am a developer of this app.",
        },
        {
            name: 'Johnny Kpehe',
            image: '/images/migee.png',
            text: "I am a developer of this app.",
        },
        {
            name: 'Princess Washington',
            image: '/images/princess.png',
            text: "I am a developer of this app.",
        },
        {
            name: 'Dev Iskalo',
            image: '/images/David.png',
            text: "I am a developer of this app.",
        }
    ]


    function UserProfile({name,image,text}){

        return(
            <div className='sm:flex align-middle justify-items-center sm:w-72 block sm:p-4 m-2'>
               <div className='shadow-2xl rounded-2xl p-2 text-center'>
               <img className='m-auto rounded-xl' src={image} alt="user img" width="200" height="100"/>
                 <h1 className='text-xl text-center font-bold p-4'>{name}</h1>
                 <p className='p-2 text-center'>{text}</p>
               </div>
            </div>
        )
    }

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <div className='sm:flex block justify-center shadow-2xl sm:p-16 rounded-2xl  sm:m-12 m-2 '>
      <div className=' sm:w-[1500px] bg-gray-200 sm:p-8 p-4 sm:rounded-2xl'>
        <img  src='/images/Ontime_App.jpg' width='700'  alt='img' className='m-auto w-[200px] rounded-lg shadow-2xl'/>
         </div>
         <div className='sm:p-8 p-2 m-4 '>
        <p className='sm:text-2xl text-xl'>OnTime visitor management app is to provide a comprehansive solution for managing visitors entering and exiting the Orange Digital Center(ODC).
        The app aims to enhance the visitor registration process, improve security, and offer insight through the visitor tricking. </p>
    </div>
  </div>
<div className='sm:flex align-center justify-center sm:p-8 m-4 sm:m-10'>
{
  Data.map((item, index)=> (
      <div key={index}>
        <UserProfile name={item.name} text={item.text} image={item.image}/>
      </div>
  ))
}
</div>
      <Footer/>
    </>
  )
}

export default About
