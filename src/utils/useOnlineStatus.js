import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [online, setOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("online", (event)=> {
            setOnline(true);
        })
        window.addEventListener("offline", (event)=> {
            setOnline(false);
        })
    })

    return online;
}

export default useOnlineStatus;