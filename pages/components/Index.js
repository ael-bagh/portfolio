import {FaReact, FaLaravel, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

export default function Index() {
    return (
        <div className="flex flex-row w-screen h-screen bg-lightbg">
        <div className="flex flex-col h-screen w-1/2 justify-center ml-10 gap-6">
          <div className="text-lg font-fo  text-paragraph">{"<div>"}</div>
          <h1 className="text-8xl text-thatwhite"> Hi,</h1>
          <h1 className="text-8xl text-thatwhite"> I am Anas</h1>
          <h1 className="text-8xl text-thatwhite"> A full </h1>
          <div className="stack flex-none" >
                <div className="sflippety border-dashed border-4 border-thatwhite p-2">
                    <h1 className="text-thatwhite text-8xl">Stack <span className=" text-lg text-paragraph"> Hover me</span></h1>
                </div>
                <div className="sflop flex flex-row p-4 border-4 border-dashed border-thatwhite text-8xl">
                <h2><FaReact className="text-blue-400"/></h2>
                    <h2><FaLaravel className="text-red-400"/></h2>
                    <h2><FaNodeJs className="text-green-400"/></h2>
                    <h2><SiTailwindcss className="text-blue-400"/></h2>
                </div>
          </div>
            <h1  className="text-8xl text-thatwhite">developer</h1>
          <div className="text-lg text-paragraph font-fo ">{"</div>"}</div>
          <div className="text-lg text-paragraph font-fo ">{"<button>"}</div>
          <button className="bg-thatpurple p-6  text-thatwhite hover:bg-thatgreen w-full">Contact me</button>
          <div className="text-lg text-paragraph font-fo ">{"</button>"}</div>
        </div>
      </div>
    )
}