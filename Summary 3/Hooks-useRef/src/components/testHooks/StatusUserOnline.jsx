import { useEffect, useState } from "react";
import useOnlineStatus from "../../hooks/useOnlineStatus"

export default function StateUserOnline() {
    const isOnline = useOnlineStatus();
    return (
        <div>
            {
                isOnline ? 'User is Online' : 'User is Disconnected'
            }
        </div>
    )
}






