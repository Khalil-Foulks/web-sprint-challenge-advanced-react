import {useEffect} from 'react'
import { useLocalStorage} from './useLocalStorage'

const useDarkMode = (key) => {
    const [value,setValue] = useLocalStorage(key)

    useEffect(() => {
        const body = document.querySelector("body")

        if(value === true){
            body.classList.add("dark-mode")
        } else {
            body.classList.remove("dark-mode")
        }
    }, [value])
    return [value, setValue]
}

export default useDarkMode