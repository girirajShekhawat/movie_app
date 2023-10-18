
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./movieCard";
import { addMovies,showFav } from "../actions";
import { data } from "../data";

class  App extends React.Component{

 
  componentDidMount(){
  const {store}=this.props;
 
  store.subscribe(()=>{
    this.forceUpdate();
  })

  store.dispatch(addMovies(data))
}

isfavorite=(movie)=>{

  const {movies}= this.props.store.getState();
 const {fav}=movies;
  const index=fav.indexOf(movie);
  if(index !== -1){
    return true;
  }
  return false;

}

 handleShowFav=(value)=>{

  this.props.store.dispatch(showFav(value));

}

 

  render(){
    const {movies}=this.props.store.getState();
    const {list,showTheFav,fav}=movies;

    const showMovie= showTheFav ? fav : list 

{console.log("type",this.props.store.getState());}
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
  <div className="tabs">
  <div className={`tab ${showTheFav ? "" : `active-tabs`}`}  onClick={()=>this.handleShowFav(false)}>Movies</div>
  <div className={`tab ${showTheFav ? "active-tabs" : `` }`} onClick={()=>this.handleShowFav(true)}>Favourites</div>
  </div>
  
  <div  className="list">
    {showMovie.map(
     (movie,index)=>(
      
        <MovieCard 
        movie={movie} 
         key={`mpvie-${index}`} 
         dispatch={this.props.store.dispatch}
         isfavorite={this.isfavorite(movie)}   />
      
      ))}
    
  </div>
  {showMovie.length == 0 ? <div className="no-movies">You have no favourite movie!!</div> : null }
        </div>
      </div>
    );
  }
  
}

export default App;
