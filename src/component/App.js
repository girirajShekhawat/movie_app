
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./movieCard";
import { addMovies,showFav } from "../actions";
import { data } from "../data";
import { connect } from "react-redux";


class  App extends React.Component{

  componentDidMount(){
  this.props.dispatch(addMovies(data))
}

isfavorite=(movie)=>{

  const {movies}= this.props;
 const {fav}=movies;
  const index=fav.indexOf(movie);
  if(index !== -1){
    return true;
  }
  return false;

}

 handleShowFav=(value)=>{

  this.props.dispatch(showFav(value));

}

  render(){
    const {movies,search}=this.props
    const {list,showTheFav,fav}=movies;

    const showMovie= showTheFav ? fav : list 



    return (
      <div className="App">
        <Navbar  dispatch={this.props.dispatch} search={search} />
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
         dispatch={this.props.dispatch}
         isfavorite={this.isfavorite(movie)}   />
      
      ))}
    
  </div>
  {showMovie.length == 0 ? <div className="no-movies">You have no favourite movie!!</div> : null }
        </div>
      </div>
    );
  }
  
}


// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <storeContex.Consumer>
//         {(store)=>{
//           return (
//             <App store={store}/>
//           )
//         }}
//       </storeContex.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search,
  }
}

const connectedComponent=connect(mapStateToProps)(App)

export default connectedComponent;
