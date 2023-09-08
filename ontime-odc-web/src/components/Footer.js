import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const ImgData =[
    {
      image:'/images/facebook.png'
    },
    {
      image:'/images/github.png'
    },
    {
      image:'/instergram.png'
    }
  ]

  const ImageProp = ({image}) =>{
     return(
      <div >
         <img className='rounded-3xl' src={image} alt='img' width='50' heigh='50'/>
      </div>
     )
  }
  
  return (
    <div className='bg-black text-white p-4'>
      <footer>
        <div className='sm:flex justify-between'>
          <div  className='flex items-center '>
          <h1 className='sm:text-2xl text-xl'>DownLoad Available</h1>
          <div>
          <Link to='/download'><img  className='m-auto' src='/apple.png' width='50' height='50' alt='img' /></Link>
      </div>
      <div>
       <Link to='/download'><img className='m-auto' src='/Playstore.png' width='50' height='30' alt='img' /></Link>
      </div>
            </div>
                <div className='flex p-4'>
                  {ImgData.map((item, index) =>(
                    <div key={index} className='ml-4' >
                       <ImageProp image={item.image}/>
                    </div>
                  ))}
                </div>
            </div>
            <div className='text-center sm:text-xl'>
            {/* Add your footer content here */}
          &copy; OnTime 2023. All right reserved
      </div>
    </footer>
  </div>
  )
}

export default Footer
