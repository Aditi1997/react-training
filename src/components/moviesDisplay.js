import React, { Component } from 'react';
import {connect} from 'react-redux';

import { changeRatingActions } from './../actions/change_rating';
@connect(store => ({ moviesStore: store.moviesStore }))

class moviesDisplay extends Component {

  componentDidMount() {
    console.log('component did mount');
    this.props.dispatch(changeRatingActions.loadInitialData());
  }

  changeRating = (id,rating) => {
    console.log(rating);
    this.props.dispatch(changeRatingActions.changeRating({id,rating}))

  };

  getListItem = (item) => (
    <div key={item.id} className="movies-display">
     <h3>{item.name}</h3>
     <img src={item.image}></img>
     <div className="movie-rating">{item.rating}/5
     <br/><br/><br/>
     <p>Give your rating</p>
     <button onClick={()=>{this.changeRating(item.id,1)}} >1</button>
     <button onClick={()=>{this.changeRating(item.id,2)}} >2</button>
     <button onClick={()=>{this.changeRating(item.id,3)}}>3</button>
     <button onClick={()=>{this.changeRating(item.id,4)}}>4</button>
     <button onClick={()=>{this.changeRating(item.id,5)}}>5</button>
     </div>
    </div>
  );

  getView = () => (
    <div className="movies-page">
        <div className="welcome">
        <h1>Welcome to Movies Rating Page</h1>
        </div>
        <ul className="movies-details">
          {this.props.moviesStore.movies.map(this.getListItem)}
        </ul>
    </div>
  );

  showLoading = () => (
    <div class="loader">Loading Movies... </div>
  );

  render(){
    if (this.props.moviesStore.isLoading) {
      return this.showLoading();
    }
    return this.getView();
  }

}
export default moviesDisplay;



// jest test cases *
// HOC
// Promises *
// Semantic UI
// CSS and Flexbox *
// React Router 3
// Yarn NPM *
// package json
// SFC
