
import { useRef, useState } from "react";



export default function StopWatch() {



    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null)


    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }



return(
    <div className="flex items-center justify-center h-64 bg-green-50">    
        <div className="space-y-2">
            <div className="text-xl font-bold">Stop Watch: {secondsPassed}</div>
            <div className="flex items-center space-x-2">
                <button className="border border-gray-300 font-bold px-4 bg-gray-100 rounded" onClick={handleStart}>start</button>
                <button className="border border-gray-300 font-bold px-4 bg-gray-100 rounded" onClick={handleStop}>stop</button>
            </div>

        </div>
    </div>
)

}



