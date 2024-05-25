import { useEffect, useState } from "react";



export default function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('');
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [value, delay])
    return debounceValue;
}