import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  const ImgData = [
    { head:`Events And Courses`,
      text: ` OnTime Visitor's Management application provides 
      relevent information about upcoming courses and events at
       the orange digital center Liberia.The Orange digital center 
       offers a wide range of technology courses and events at no
        cost periodically, to support the tech enthusissts in liberia.`,
    },
    {
      head:`Attendence Tracking`,
      text: ` The OnTime app tracks realtime visitors employees and students attendence.
      It provides a structured and reliable system to collect and store data.
      This brings employees attendence data to management's fingers and helps in making quality decisions and for reference purposes.`,
    },
    {
      head:`Activities Tracking`,
      text: ` OnTime management app collects and track the activities
       of every visitor, student and facilitator that visits the orange digital
        center daily. This provides management with statistical data about the how 
        students and participants are turning up for courses and events at the ODC.
         `,
    },
    {
      head:`Events And Courses`,
      text: ` OnTime visitor management app is to provide a comprehansive
      solution for managing visitors entering and exiting the Orange
      Digital Center(ODC). The app aims to enhance the visitor
      registration process, improve security, and offer insight
      through the visitor tricking.`,
    },
  ];

  const TextProp = ({ text , head}) => {
    return (
      <div className="justify-center p-10 ">
        {/* <img src={image} alt="img" width="200" height="100" /> */}
        <h1 className="text-2xl font-bold">{head}</h1>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      {/** This is the body section  */}
      <div className="">
        <div>
          <div className="flex flex-col lg:flex-row sm:shadow-2xl sm:m-6 m-4 sm:p-20 rounded-lg">
            <div>
              <p className="sm:text-6xl p-2 font-bold text-4xl">OnTime</p>
              <p className="m-4 text-gray-600">
                OnTime visitor management app is to provide a comprehansive
                solution for managing visitors entering and exiting the Orange
                Digital Center(ODC). The app aims to enhance the visitor
                registration process, improve security, and offer insight
                through the visitor tricking.
              </p>
              <button className="m-2 bg-orange-500 sm:p-4 p-2 rounded-2xl text-white font-bold hover:bg-orange-300 hover:text-black">
                <Link to="/download">Apple Store</Link>
              </button>
              <button className="m-2 bg-orange-500 sm:p-4 p-2 rounded-2xl text-white font-bold hover:bg-orange-300 hover:text-black">
                <Link to="/download">PlayStore Store</Link>
              </button>
            </div>
            <img src="/images/ontimeart.jpg" alt="Ontime App Page Sample"></img>
          </div>
        </div>
        <div className="flex p-2 justify-center flex-col lg:flex-row sm:m-10 ">
          {ImgData.map((item, index) => (
            <div
              key={index}
              className="sm:m-auto shadow-2xl w-full lg:w-1/5 mb-10 rounded-xl text-gray-600 bg-gray-50"
            >
              <TextProp head={item.head} text={item.text} />
            </div>
          ))}
        </div>
      </div>
      {/** This is the footer section  */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
