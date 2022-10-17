import axios from "axios"

export const getPesonajes = () => {
    try{
        return axios.get('https://thronesapi.com/api/v2/Characters')
    }catch{
        console.log('error al obtener los personajes')
    }
}