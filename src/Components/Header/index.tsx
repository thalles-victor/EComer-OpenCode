import React from "react";
import { BiSearchAlt2 } from 'react-icons/bi'

interface ITopicProps {
  text: string
}

function Topcs({ text }: ITopicProps) {
  return (
    <>
      <div className="flex w-48 justify-center align-middle border-solid border-black border-2 mx-1 bg-[#474747] hover:cursor-pointer hover:bg-[#5a5959] transition-color: duration-100">
        <h1 className="text-[#FEB491]  text-md"> {text} </h1>
      </div>
    </>
  );
}


const Header: React.FC = () => {
  return (
    <>
      <div className=" flex fixed flex-col w-[100%] justify-center font-[Hahmlet] border-[0.0625rem] border-b-black shadow-lg">

        <div className="flex align-middle justify-center flex-row pt-4 pb-[0.75rem] bg-[#FFAEC0]">
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
          <Topcs text="Topic"></Topcs>
        </div>

        <div className="flex align-middle justify-end mr-[2.5rem] bg-[#F6F6F6]">
          <div className="flex w-max   justify-center m-2 border-2 rounded-[66px] p-1 border-black focus-within:border-[#E63709]">
            <input placeholder="Search input" className="text-4 bg-transparent  border-2 w-[30.1875rem] pl-[16px] pr-6 outline-none  mx-2 border-transparent border-b-2 border-b-[#676767]" />
            <BiSearchAlt2 size={22} className="m-0 absolute ml-[29.1875rem]" />
          </div>
        </div>
      </div>


    </>
  );
};

export { Header };
