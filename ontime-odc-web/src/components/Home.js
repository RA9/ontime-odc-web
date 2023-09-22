import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {

  const ImgData =[
    {
      image:'/images/ontime_App.jpg'
    },
    {
      image:'/images/ontime2.png'
    },
    {
      image:'/images/ontime3.png'
    }
  ]

  const ImageProp = ({ image }) => {
    return (
      <div className='justify-center text-center sm:m-20 shadow-2xl'>
        <img src={image} alt='img' width='200' height='100' />
      </div>
    );
  };

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      {/** This is the body section  */}
      <div className=''>
        <div>
          <div className='sm:shadow-2xl sm:m-6 m-4 sm:p-20'>
          <p className='sm:text-6xl p-2 font-bold text-4xl'>OnTime</p>
          <h1 className='m-4 font-bold sm:text-2xl '>Download App</h1>
          <div>
            <button  className='m-2 bg-orange-500 sm:p-4 p-2 rounded-2xl text-white font-bold hover:bg-orange-300 hover:text-black'>
               <Link to='/download'>Apple Store</Link>
            </button>
            <button className='m-2 bg-orange-500 sm:p-4 p-2 rounded-2xl text-white font-bold hover:bg-orange-300 hover:text-black'>
            <Link to='/download'>PlayStore</Link>
            </button>
          </div>
          </div>
        </div>
        <div className='flex p-2 justify-center sm:m-10 '>
        {ImgData.map((item, index) => (
          <div key={index} className='m-2 sm:m-auto shadow-2xl rounded-xl'>
            <ImageProp image={item.image} />
          </div>
        ))}
      </div>
      </div>
      {/** This is the footer section  */}
      <div>
        <Footer/>
    </div>
    </div>
  )
}

export default Home
