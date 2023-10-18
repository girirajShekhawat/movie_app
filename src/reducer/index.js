
import { Add_Movies,Add_Fav,Remove_Fav,Show_Fav} from "../actions";

const initialState={
    list:[],
    fav:[],
    showTheFav:false,
}


export default function movies (state=initialState, action){

   
switch (action.type){

    case Add_Movies:
        return {
            ...state,
            list: action.movies,
        }

    case Add_Fav:
        return{
            ...state,
            fav:[action.movie,...state.fav]
        }

    case Remove_Fav:
        const filterArray= state.fav.filter((movie)=>(action.movie.Title!== movie.Title))
        return {
            ...state,
            fav:filterArray,
        }
        
    case Show_Fav:
    return {
     ...state,
     showTheFav:action.value,
    }    
        // reducer have to return something thats why we sending the previouse state in case when there is nothing to return 
    default :
    return state;    
}
}



