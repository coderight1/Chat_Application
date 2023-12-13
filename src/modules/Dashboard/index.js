import React from "react";
import Avatar from "../../assets/Avatar.svg";
import Call from "../../assets/call.svg";
import Videocall from "../../assets/video-call.svg";
import Send from "../../assets/send-icon.svg";
import Circle from "../../assets/circle-plus.svg";

const Dashboard = () => {
  const contacts = [
    {
      name: "uttam",
      status: "Available",
      img: Avatar,
    },
    {
      name: "sanjana",
      status: "Available",
      img: Avatar,
    },
    {
      name: "uttam",
      status: "Available",
      img: Avatar,
    },
    {
      name: "sanjana",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Bhabhi1",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Bhabhi2",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-white overflow-scroll ">
        <div className="flex justify-center items-center my-8">
          <div className="border border-primary p-[6px] rounded-full bg-purple-300">
            <img src={Avatar} width={75} height={75} className="rounded-full" alt=""/>
          </div>
          <div className="ml-8">
            <h3 className="text-2xl">Uttam Singh</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-10 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-6 border-b border-b-gray-400 ">
                  <div className="cursor-pointer flex items-center">
                    <div className="border border-red-500 p-[8px] rounded-full bg-purple-300">
                      <img
                        src={img}
                        width={60}
                        height={60}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ml-8">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-400">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[50%] h-screen bg-lime-200 flex flex-col items-center">
        <div className="w-[75%] bg-zinc-200 h-[80px] my-10 rounded-full flex items-center px-8 ">
          <div className="cursor-pointer">
            <img src={Avatar} width={60} height={60} alt=""/>
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg font-semibold ml-4">Alex</h3>
            <p className="text-sm font-light text-gray-400">Online</p>
          </div>
          <div className="cursor-pointer px-3 mx-3">
            <img src={Call} width={30} height={30} alt=""/>
          </div>
          <div className="cursor-pointer px-3 mx-3">
            <img src={Videocall} width={30} height={30} alt="" />
          </div>
        </div>
        <div className="h-[75%] w-full overflow-scroll border-b">
          <div className=" p-14">
            <div className=" max-w-[70%] bg-secondary rounded-b-xl rounded-tr-xl p-4 text-white mb-6">
              Hi Uttam , How are you . Nice to see you that you are working
              again on this project,afhkaks dfka sfkjh adfjkdhfkd k kkasjdk ,
              asdfkdshfh dfkhndhfeh adfjhfdf erheio.fdsak fjasdhf dsgkaljfa
              dsjfksda fdhfjeo riojfms ierhtierjl sdfkpoeue orjfk dfkldfj sf
            </div>
            <div className=" max-w-[70%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 mb-6">
              dsfkljaksdfj Hi Uttam , How are you .
            </div>
            <div className=" max-w-[70%] bg-secondary rounded-b-xl rounded-tr-xl p-4 text-white mb-6">
              Hi Uttam , How are you . Nice to see you that you are working
              again on this project,afhkaks dfka sfkjh adfjkdhfkd k kkasjdk ,
              asdfkdshfh dfkhndhfeh adfjhfdf erheio.fdsak fjasdhf dsgkaljfa
              dsjfksda fdhfjeo riojfms ierhtierjl sdfkpoeue
            </div>
            <div className=" max-w-[70%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 mb-6">
              dsfkljaksdfj Hi Uttam , How are you .
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <input
            placeholder="Type a message"
            className="w-full h-16 rounded-full p-8 "
            inputClassName=" px-4 shadow-md rounded-full bg-light outline-none"
          />
          <div className="ml-4 p-2 bg-light rounded-full cursor-pointer">
            <img src={Send} width={40} height={40} alt=""/>
          </div>
          <div className="ml-4 p-2 bg-light rounded-full cursor-pointer">
            <img src={Circle} width={40} height={40} alt=""/>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen "></div>
    </div>
  );
};

export default Dashboard;
