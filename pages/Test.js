export default function Test(){
    function handleRadio(e)
    {
        let ele = document.getElementById('cub');
        ele.classList.add('show-back')
    }
    return (
            <div className="cube show-top" id="cub">
                <div className="cube__face cube__face--front h-screen">front</div>
                <div className="cube__face cube__face--back h-screen">back</div>
                <div className="cube__face cube__face--right h-screen">right</div>
                <div className="cube__face cube__face--left h-screen">left</div>
                <div className="cube__face cube__face--top h-screen">top</div>
                <div className="cube__face cube__face--bottom h-screen">bottom</div>
            </div>
    )
}