import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const getFetch =  () => {
        setState({
            ...state,
            isLoading:true
        })

        axios.get(url)
        .then(({data}) => setState({
            isLoading: false,
            data
        }))
        .catch(() =>{ 
            setState({
                ...state,
                isLoading: false,
            })
            console.log('error al obtener characters')
        })

       
    } 

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
    }
}