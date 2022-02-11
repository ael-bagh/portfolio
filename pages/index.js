import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import {BsGithub,BsLinkedin,BsArrowDown} from 'react-icons/bs';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Anas El Baghdadi</title>
        <meta name="Developer portfolio" content="Anas El Baghdadi Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="flex flex-col w-28 h-screen bg-darkbg justify-between items-center">
          <div className="p-1">
          <Image className="p-0 w-full" src={logo} alt="Anas"/>
          </div>
          <div className="flex flex-col justify-items-center items-center text-thatwhite gap-10">
            <div>Projects</div> 
            <div>Skills</div> 
            <div>Adventure</div> 
          </div>
          <div className="flex flex-col justify-items-center items-center text-thatwhite gap-4 p-10">
            <div className="text-3xl font-extrabold bg-thatwhite text-darkbg rounded-full animate-bounce p-1"><BsArrowDown/></div>
           <a className="text-3xl" href="https://github.com/ael-bagh"> <BsGithub/> </a> 
           <a className="text-3xl" href="www.linkedin.com/in/anas-el-baghdadi-77494419b"> <BsLinkedin/> </a> 
          </div>
        </div>
        <div className="flex flex-row w-screen h-screen bg-lightbg">
          <div className="flex flex-col h-screen w-1/2 justify-center ml-10 gap-6">
            <div className="text-lg text-paragraph">{"<div>"}</div>
            <h1 className="text-8xl text-thatwhite"> Hi,</h1>
            <h1 className="text-8xl text-thatwhite"> I'am Anas</h1>
            <h1 className="text-8xl text-thatwhite"> A full stack dev</h1>
            <div className="text-lg text-paragraph">{"</div>"}</div>
            <div className="text-lg text-paragraph">{"<button>"}</div>
            <button className="bg-thatpurple p-6 w-1/4 text-thatwhite ">Contact me</button>
            <div className="text-lg text-paragraph">{"</button>"}</div>
          </div>
          <div className="flex flex-col h-screen w-1/2 bg-thatgreen">
            <div className="text-8xl text-thatpurple flex flex-row flex-wrap">
              <div className="cube flex-none w-full">
	              <div className="flippety">
		              <h1 className="">this is me</h1>
	              </div>
	              <div className="flop flex flex-row ">
                  <img src="https://github.com/ael-bagh/ael-bagh.github.io/blob/master/img/profile.JPG?raw=true" className="h-full"/>
	              </div>
              </div>
              <div className="cube flex-none w-full">
	              <div className="flippety">
		              <h1>That's what I do</h1>
	              </div>
	              <div className="flop">
		              <h2>Flop</h2>
	              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
