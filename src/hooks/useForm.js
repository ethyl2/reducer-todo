import { useState } from 'react';

export const useForm = initialValues => {
    const [inputValues, setInputValues] = useState(initialValues);

    const handleChanges = e => setInputValues({...inputValues, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
            console.log(e.target);
            setInputValues(initialValues);
        }
    }

    return [inputValues, handleChanges, handleSubmit];
}