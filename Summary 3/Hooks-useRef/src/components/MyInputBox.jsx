import { forwardRef } from "react";
import MyInput from "./MyInput";
import { useRef } from "react";




export default function MyInputBox() {

    const searchRef = useRef(null);



    const handleFocuss = () => {
        searchRef.current.focus();
    }






    return (
        <div className="flex flex-col items-center justify-center h-64 bg-yellow-50">

            <button className="border border-gray-300 m-3 font-bold px-4 bg-gray-100 rounded" onClick={handleFocuss}>Search</button>
            <MyInput ref={searchRef} />

        </div>
    )

}







