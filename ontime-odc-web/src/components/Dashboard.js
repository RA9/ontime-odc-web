import React, { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import Footer from "./Footer";
import NavBar from "./NavBar";
import DashboardCard from "./DashboardCard";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "OnTime Data",
      data: [12, 10, 3, 5, 2, 3, 7, 8, 19, 10, 11, 12],
      backgroundColor: "#E34518",
    },
  ],
};

const Dashboard = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [dataa, setData] = useState(data);

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: data,
      });
    }
  }, [dataa]);

  useEffect(() => {
    chartRef.current.data = data;
    chartRef.current.update();
  }, [dataa]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="mt-5">
        <div className="flex mt-4 p-4 gap-4">
          <DashboardCard title="Total LoggedIn Users" amount="100" />
          <DashboardCard title="Total Events" amount="5" />
          <DashboardCard title="Genders" female="30" male="70" />
        </div>
        <div className="flex m-4 mt-1 border-black border rounded-[10px] justify-center align-center">
          <canvas
            ref={canvasRef}
            setData={setData}
            style={{ width: "100%", height: "5%/2" }}
          ></canvas>
        </div>

        <div className="flex gap-[19%] p-2 border-black m-4 h-60 border  relative justify-center rounded-[10px]">
          <p>Name</p>
          <p>Action</p>
          <p>Users</p>
          <p>Date Created</p>
          <hr className="absolute bg-black w-full h-[2px] mt-[30px]" />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;
