import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Naruto']);
    //
    //    // Forma 2
    //    //setCategories(cats => [...cats, 'Naruto']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    // Por defecto, map, recibe 2 propiedades, 1 el elemento a iterar, 2 el id o la posicion del elemento dentro del arreglo
                    // No se recomienda usar el id como key en la lista pues es un valor volatil, muy suceptible a cambios
                    categories.map((category, i) => (
                        <GifGrid category={category} key={category}/>
                    )
                )}
            </ol>
        </>
    );
};

export default GifExpertApp;
