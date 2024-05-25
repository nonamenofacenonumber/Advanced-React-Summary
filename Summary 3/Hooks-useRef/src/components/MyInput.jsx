import { forwardRef } from "react";



const MyInput = forwardRef(({ /*   props   */ }, searchRef) => {
    return (
        <input
            ref={searchRef}
            placeholder="Looking for something?"
        />
    )
})

export default MyInput;











