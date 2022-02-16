import Image from "next/image"
import {BsGithub,BsLinkedin,BsArrowDown} from 'react-icons/bs';

export default function Nav(){
    return (
        <div className="flex flex-col w-28 h-screen sticky top-0 bg-darkbg justify-between items-center">
          <div className="p-1">
          </div>
          <div className="flex flex-col justify-items-center items-center text-thatwhite gap-10">
            <div>About</div> 
            <div>Adventure</div>
          </div>
          <div className="flex flex-col justify-items-center items-center text-thatwhite gap-4 p-10">
            <div className="text-3xl font-extrabold bg-thatwhite text-darkbg rounded-full animate-bounce p-1"><BsArrowDown/></div>
           <a className="text-3xl" href="https://github.com/ael-bagh"> <BsGithub/> </a> 
           <a className="text-3xl" href="www.linkedin.com/in/anas-el-baghdadi-77494419b"> <BsLinkedin/> </a> 
          </div>
        </div>)
}