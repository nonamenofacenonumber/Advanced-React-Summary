import { useEffect, UseState } from "react";
import useOnlineStatus from "../../hooks/useOnlineStatus"

export default function SaveProgress() {
    const isOnline = useOnlineStatus();

    const progressHandler = () => {
        console.log('save progress');
    }

    return (        
        <button onClick={progressHandler} disabled={!isOnline} className={`border border-gray-300 m-3 font-bold px-4 bg-gray-100 rounded 
        ${isOnline ? '' : 'opacity-50'}`} >
            {isOnline ? 'save Progress' : 'Reconnecting ...'}
        </ button>
    )
}










