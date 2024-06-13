import axios from "axios";
import { getALLAC, getOneCountry } from "../store/store";

 const instanse =axios.create({
    baseURL : 'https://restcountries.com/v3.1'
})

export const countriesAPI ={
    getALL(dispatch){
        instanse.get('/all')
            .then((res)=>dispatch(getALLAC(res.data)))

    },
    getOne(dispatch,name){
        instanse.get(`name/${name}`)
        .then((res)=>dispatch(getOneCountry(res.data)))
    }

}



























