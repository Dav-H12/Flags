const GET_ALL = 'get-all'
const GET_ONE = 'get-one'


 export const initState = {
    countries : [],
    country : []
}

 export const reducer =(state ,action)=>{
    switch(action.type){
       case GET_ALL:
         return {
            ...state,
            countries : action.payload
        }
        case GET_ONE :
            return {
                ...state,
                country : action.payload
            }

        default :
           return state
    }
}

export const getALLAC = (data)=>{
    return {type :GET_ALL , payload : data}
}

export const getOneCountry = (name)=>{
     return{type : GET_ONE ,payload : name}
}





