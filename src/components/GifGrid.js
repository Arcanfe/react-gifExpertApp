import React, {useState, useEffect} from 'react'
import GifGridItem from './GifGridItem';
//import {getGifs} from '../helpers/GetGifts';
import { useFetchGifts } from '../hooks/useFetchGifts';

const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    // UseEffect permite ejecutar el codigo de manera condicional
    // Segundo condicional es una lista de dependencias, al poner el arreglo vacio [], se indica que no tiene dependencias. Se ejecuta una vez
    //useEffect(() => {
    //    getGifs(category)
    //        .then(imgs => setImages(imgs));
    //}, [category]);
    // En caso que cambie la categoria, se coloca que habra dependencia de cambios de categoria

    

    // Al estar en este nivel, React vuelve a llamar el metodo para actualizar las referencias, para eso se usa useEffect
    // Por orden, este metodo se pasa a otro archivo
    // getGifs();

    const {data:images, loading} = useFetchGifts(category); 
    console.log(loading);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p> }
            <div className='card-grid'>
                

                    {
                        images.map((image) => {
                            // Envia parametros a traves del spread junto al elemento. Realiza la misma accion que mandar hacer desestructuracion despues
                        return <GifGridItem {...image} key={image.id}/>
                        })
                    }
            </div>

        </>
    )
}

export default GifGrid
