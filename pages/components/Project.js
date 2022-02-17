export default function Project(){
    return (
        <div className=" flex flex-col bg-darkbg border-1 border-black p-2 h-fit w-fit hover:scale-110">
            <img src="https://www.shellscript.sh/tips/spinner/spinner.gif" className="w-full" alt="project"/>
            <div className=" text-thatwhite text-lg ">Minishell</div>
            <div className=" text-paragraph text-sm">Creating a simple shell</div>
            <div className="text-lg text-white">Skills</div>
            <div className="flex flex-row flex-wrap gap-2 p-2">
                <div className="rounded-md bg-thatpurple text-xs text-thatwhite p-2">Rigor</div>
                <div className="rounded-md bg-thatpurple text-xs text-thatwhite p-2">Unix</div>
                <div className="rounded-md bg-thatpurple text-xs text-thatwhite p-2">Imperative programming</div>
            </div>
            <div className="text-lg text-white">Stack</div>
            <div className="flex flex-row flex-wrap gap-2 p-2">
                <div className="rounded-md bg-thatgreen text-xs text-thatwhite p-2">C</div>
            </div>
        </div>
    )
}