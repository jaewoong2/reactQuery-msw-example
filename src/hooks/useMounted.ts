import { useEffect, useState } from "react"

const useMounted = () => {
    const [moutned, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])


    return moutned
}

export default useMounted