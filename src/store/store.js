const GET_ALL = 'get-all'
const GET_ONE = 'get-one'
const GET_REGION ='get-region'
const CHANGE_TEXT = 'change'

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
        case GET_REGION : 
            return {
                ...state,
                countries : action.payload
            }
            case CHANGE_TEXT :
                return {
                    ...state,
                    text : action.payload
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

export const getRegionAC=(region)=>{
    return{type :GET_REGION,payload:region}
}

export const getTextAC = (text) =>{
    return{type : CHANGE_TEXT ,payload :text}
}

