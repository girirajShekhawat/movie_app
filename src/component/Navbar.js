
import React, { Component } from 'react'
import { addmovietolist,handleMovieSearch } from '../actions';
import { data } from '../data';
import { storeContex } from '..';
import { search } from '../reducer';
import { connect } from 'react-redux';
class Navbar extends Component {

 constructor(props){
  super(props);
  this.state={
searchText:'',
  }
 }

handleAddToMovies=(movie) => {
  this.props.dispatch(addmovietolist(movie))

}

handleSearch=()=>{
  const {searchText}=this.state

  this.props.dispatch(handleMovieSearch(searchText))
}

handleChange =(e) =>{
  this.setState({
    searchText:e.target.value
  })
}

  render() {
  const  {result:movie ,showSearchResult}= this.props.search;
  
  return (
      <div className='nav'>
<div className='search-container'>
<input onChange={this.handleChange} />
<button id="search-btn" onClick={this.handleSearch}>Search</button>


{showSearchResult && 
<div className='search-results'>
  <div className='search-result'>
    <img src={movie.Poster} alt="search-pic"/>

    <div className='movie-info'>
      <span>{movie.Title}</span>
      <button onClick={()=> this.handleAddToMovies(movie)}>
        Add To Movies
      </button>
    </div>
  </div>
</div>
}

      </div>
      </div>
    )
  }
}

// class NavbarWrapper extends React.Component{
//   render(){
// return(
//  <storeContex.Consumer>
//   {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search} />}
//  </storeContex.Consumer>
// )
//   }
// }

function mapStateToProps(state){
  return{
    search:state.search,
  }
}

export default connect(mapStateToProps)(Navbar) ;
