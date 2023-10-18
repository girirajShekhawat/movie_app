

// {
//     type:"Add-movies",
//     movies :  [],
// }


//  action types 
export  const Add_Movies= "Add_Movies";
export const Add_Fav="Add_Fav"
export  const Remove_Fav="Remove_Fav";
export  const Show_Fav="Show_Fav";

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