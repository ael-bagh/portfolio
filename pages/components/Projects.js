import Project from "./Project";

export default function Projects(){
    return (
        <div className="flex flex-col bg-lightbg w-screen overflow-y-scroll" >
            <div className="text-thatwhite text-3xl md:text-8xl text-center font-extrabold p-8">Adventure</div>
            <div className="flex content-start flex-wrap gap-10 p-4 justify-center">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}