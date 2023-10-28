import React from "react";

const DashboardCard = (props) => {
  return (
    <>
      <div className="w-1/2 flex flex-col border-black bg-gray-100 shadow-outer justify-center items-start gap-2 h-[50%] p-4 rounded-[10px]">
        <p className="font-bold text-lg my-2 text-center">{props.title}</p>
        <p className="my-2 p-2">{props.amount}</p>
        <div className="flex flex-row gap-x-56 bottom-5 items-center  justify-center content-between">
          {props.female && (
            <p className="p-2 font-bold">Female: {props.female}</p>
          )}
          {props.male && <p className="p-2">Male: {props.male}</p>}
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
