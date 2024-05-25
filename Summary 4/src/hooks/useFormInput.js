import { useState } from "react";

export default function useFormInput(initialValue) {
    const [ value , setValue ] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const resetValue = () => {
        setValue('')
    }

    return {
        value,
        resetValue,
        onChange : onChangeHandler
    }

}
