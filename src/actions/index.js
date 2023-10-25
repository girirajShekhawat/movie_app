

// {
//     type:"Add-movies",
//     movies :  [],
// }


//  action types 
export  const Add_Movies= "Add_Movies";
export const Add_Fav="Add_Fav"
export  const Remove_Fav="Remove_Fav";
export  const Show_Fav="Show_Fav";
export const  AddMovieToList="AddMovieToList"
export const AddSearchResult="AddSearchResult"

// action creater
export  function addMovies(movies){
    return{
        type:Add_Movies,
        movies:movies,
    }
}

export function addFav(movie){
    return {
        type:Add_Fav,
        movie
    }
}

export function removeFav(movie){
    return {
        type:Remove_Fav,
        movie
    }
}

export function showFav(val){
    return {
        type:Show_Fav,
        value:val
        
    }
}
export function addmovietolist(movie){
    return {
        type:AddMovieToList,
        movie
        
    }
}

export function handleMovieSearch(movie){
   
  return function (dispatch){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    fetch(url).
    then((response)=> response.json()).
    then((movie)=> 
    // dispatch an action 
dispatch(addmovietosearchresult(movie))
    
    )}
}


export function addmovietosearchresult(movie){
    return {
        type:AddSearchResult,
        movie
        
    }
}
