import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import {AiOutlineArrowDown} from 'react-icons/ai'

const About = () => {
  

    const Data = [
        {
            name: 'Nyenpandi J. B. Holder',
            image: '/images/Josephine.png',
            text: "Student",
            link: "",
        },
        {
            name: 'Johnny Kpehe',
            image: '/images/migee.png',
            text: "Student.",
            link: "https://github.com/James1997-Ed?tab=repositories",
            link2: "https://twitter.com/johnny_k1997",
            link3: "https://www.linkedin.com/in/johnny-kpehe-90607a254/",
        },
        {
            name: 'Princess Washington',
            image: '/images/princess.png',
            text: "Student",
            link: "https://github.com/princesswG",
        },
        {
          name: 'Alfred Ngwayah',
          image: '/images/logic.png',
          text: "Student",
          link: "https://github.com/Big-Logic"
      },
        {
            name: 'Isaac L. Kamara, Jr',
            image: '/images/David.png',
            text: "Student",
            link: "https://github.com/Deviskalo"
        }
    ]


    function UserProfile({name,image,text, link, link2, link3}){

        return(
            <div className=' justify-items-center  block sm:p-2 m-2 rounded-xl'>
               <div className='shadow-2xl rounded-2xl p-4  text-center bg-slate-800'>
               <img className='m-auto object-cover w-48 h-auto rounded-full  outline-white' src={image} alt="user img" width="200" height="200"/>
                 <h1 className='text-xl text-center font-bold p-2 text-orange-600'>{name}</h1>
                 <p className=' text-center text-white mb-2'>{text}</p>
                 <div className='flex justify-center'>
                 <a href={link}><img src='/images/github.png' alt='images' width='30' heigh='50' className='m-auto mr-2 rounded-2xl'/></a>
                 <a href={link2}><img src='/images/twitter.png' alt='images' width='30' heigh='50' className='m-auto mr-2 rounded-2xl'/></a>
                 <a href={link3}><img src='/images/linkin.png' alt='images' width='30' heigh='50' className='m-auto mr-2 rounded-2xl' /></a>
                 </div>
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
        <img  src='/images/Ontime2.png' width='800'  alt='img' className='m-auto w-[200px] rounded-lg shadow-2xl'/>
         </div>
         <div className='sm:p-8 p-2 m-4 '>
        <p className='sm:text-2xl text-xl'>OnTime visitor management app is to provide a comprehansive solution for managing visitors entering and exiting the Orange Digital Center(ODC).
        The app aims to enhance the visitor registration process, improve security, and offer insight through the visitor tricking. </p>

        <div className='sm:grid grid-cols-2 sm:m-8'>
          <Link to='/download'><img className='m-2' src="/images/appstore.png" alt="newImage"/></Link>
          <Link to='/download'><img className='rounded-xl m-2' src="/images/playstore.png" alt="newImage"/></Link>
        </div>
    </div>
  </div>
  <h1 className='text-center font-bold sm:text-5xl text-4xl'>Meet Our Team</h1>
     <div className='grid sm:grid-cols-3 sm:p-8 sm:m-8 rounded-2xl m-2 bg-slate-950'>
          {
            Data.map((item, index)=> (
                <div key={index}>
                  <UserProfile
                    name={item.name} 
                    text={item.text} 
                    image={item.image}
                    link={item.link}
                    link2={item.link2}
                    link3={item.link3}
                    />
                </div>
            ))
          }
     </div>
      <Footer/>
    </div>
  )
}

export default About
