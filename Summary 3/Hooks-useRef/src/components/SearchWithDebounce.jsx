import { useEffect, useState } from "react"
import useDebounce from "./../hooks/useDebounce"


export default function SearchWithDebounce() {


    const [searchTerm, setSearchTerm] = useState('');
    const searchText = useDebounce(searchTerm, 1000);


    useEffect(() => {
        console.log('send an ajax request');
    }, [searchText])



    return (
        <div className="flex flex-col items-center justify-center h-64 bg-orange-50">
            <h4 className="font-bold m-3">SearchWithDebounce</h4>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Looking for something?"
            />
        </div>
    )
}


