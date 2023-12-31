import { combineReducers } from "redux";
import { Add_Movies,Add_Fav,Remove_Fav,Show_Fav,AddSearchResult,AddMovieToList} from "../actions";

const initialMovieState={
    list:[],
    fav:[],
    showTheFav:false,
}


export  function movies (state=initialMovieState, action){

   
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
    
    case AddMovieToList:
        return {
            ...state,
            list:[action.movie, ...state.list]
        }

        // reducer have to return something thats why we sending the previouse state in case when there is nothing to return 
    default :
    return state;    
}
}

const initialSearchState={

    result:{},
    showSearchResult:false,
}

export function search (state=initialSearchState, action  ){

switch (action.type){
 case AddSearchResult:
    return {
        ...state,
        result:action.movie,
        showSearchResult:true
    }
  
    case AddMovieToList:
        return {
            ...state,
            showSearchResult:false,
        }

    default :
    return state;
  }
}


const intialRootState={
    movies:initialMovieState,
    search:initialSearchState,
}



// export default function rootReducer(state=intialRootState,action){

//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }

// }


export default combineReducers({
    movies,
    search,
})

