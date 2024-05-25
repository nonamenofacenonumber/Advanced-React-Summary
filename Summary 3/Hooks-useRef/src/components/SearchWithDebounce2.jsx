import { useEffect, useState } from "react"
import useDebounce from "./../hooks/useDebounce"
import useFormInput from "./../hooks/useFormInput"

export default function SearchWithDebounce2() {


    const searchTermProps = useFormInput('');
    const searchText = useDebounce(searchTermProps.value, 1000);


    useEffect(() => {
        console.log('send an ajax request');
    }, [searchText])



    return (
        <div className="flex flex-col items-center justify-center h-64 bg-purple-50">
            <h4 className="font-bold m-3">SearchWithDebounce2</h4>
            <input
                {...searchTermProps}
                placeholder="Looking for something?"
            />
        </div>
    )
}


