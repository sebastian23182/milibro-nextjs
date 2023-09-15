import { useState, useEffect } from "react"

function useLocalStorageListener() {
    const [storageListener, setStorageListener] = useState(false)

    useEffect(() => {
        window.addEventListener("storage", (e) => {
            if(e.key === "__redux__books__state__") setStorageListener(true);  
        })
    }, [])

    return { storageListener, setStorageListener }
}

export { useLocalStorageListener }