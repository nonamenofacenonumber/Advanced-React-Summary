import { useState } from "react";

export default function useFormInput(initialValue) {
    const [valueInput, setValueInput] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValueInput(event.target.value);
    }
    return {
        value: valueInput,
        onChange: onChangeHandler
    }
}







