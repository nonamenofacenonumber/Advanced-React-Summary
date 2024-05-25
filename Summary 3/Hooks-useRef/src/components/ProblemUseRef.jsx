import { useState } from "react";
import { useRef } from "react";



export default function ProblemUseRef() {

    const [showMessage, setMessage] = useState(true);
    const myP = useRef(null);

    const toggleMessageHandler = () => {
        setMessage(!showMessage);
    }

    const toggleMessageWithRefHandler = () => {
        myP.current.remove();
    }







    return (
        <div className="flex items-center justify-center h-64 bg-blue-50">
            <div className="space-y-2 flex flex-col items-center justify-center">
                <button className="border border-gray-300 font-bold px-4 bg-gray-100 rounded" onClick={toggleMessageHandler}>toogle message with state</button>
                <button className="border border-gray-300 font-bold px-4 bg-gray-100 rounded" onClick={toggleMessageWithRefHandler}>remove message from DOM</button>
                {/* it is not valid code because we don't have to remove JSX with useRef */}
                {showMessage && <p>Hello World</p>}                
                <p ref={myP}>Hello World</p>
            </div>
        </div>
    )

}






