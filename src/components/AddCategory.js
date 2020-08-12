import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    // Nunca dejar useState() sin valor (undefined), poner un valor inicial
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        console.log('Submit hecho');

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
       
        // Previene por defecto que la pagina (por el uso del formulario) se refresque al hacer enter
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
