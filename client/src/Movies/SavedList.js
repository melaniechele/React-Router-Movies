import React from 'react';
import {useHistory, Link} from 'react-router-dom'

const SavedList = props => {
  const history= useHistory();
  console.log("history: ", history);
  const navToHome = (e) => {
    console.log("moving to home page");
    history.push('/');
  }

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={navToHome}><Link to='/'>Home</Link></div>
  </div>
  );
    };

  


export default SavedList;
