import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom'; 

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
    <div>
      <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route path='/movies/:id' component={Movie}/>
      </Switch>
    </div>
    </div>
  );
};

export default App;
