import React, { Component } from 'react'
import { addFav, removeFav } from '../actions';

export default class MovieCard extends Component {

    handleAddFav=()=>{
 const {movie,dispatch}=this.props;
 dispatch(addFav(movie))
    }

    handleUnFav=()=>{
        const {movie,dispatch}=this.props;
        dispatch(removeFav(movie))
           }
           

  render() {
    const {movie,isfavorite} =this.props;
   
   
    return (
    <div className='movie-card'>
        <div className='left'>
            <img alt="movie-poster" src={movie.Poster}/>
            </div>
            <div className='right'>
                <div className='title'>{movie.Title}</div>
                <div className='plot'>{movie.Plot}</div>
                <div className=' footer'>
                    <div className='rating'>{movie.imdbRating}</div>
                    {
                    isfavorite ?
                    <button className='unfavourite-btn ' onClick={this.handleUnFav}>Unfavourite</button>
                    :
                    <button className='favourite-btn' onClick={this.handleAddFav}>Favourite</button>
                    }
                    
                </div>
            </div>
            </div>
        

    )
  }
}
