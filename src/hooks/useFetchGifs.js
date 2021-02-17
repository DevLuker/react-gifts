import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data : [],
        loading : true
    });

    //Sólo se dispara cuando se cambia la categoría
    useEffect(() => {
        //Realiza la petición HTTP
        getGif(category)
        //Obtenemos los datos
            .then(img => {
                //Re guardamos el dato cambiando la información
                setstate({
                    data: img,
                    loading: false
                });
            })

    }, [category])

    return state;

}
