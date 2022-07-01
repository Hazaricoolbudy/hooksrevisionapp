import React, { useEffect, useState } from 'react'


const Route = ({ path, children }) => {
    const [currentPath, setCurrentpath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentpath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return (
        <div>
            {currentPath === path ? children : null}
        </div>
    )
}

export default Route
