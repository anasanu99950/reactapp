
import React, { useState } from 'react';
import './Director.css'; 

const DirectorMovies = () => {
  const [directors, setDirectors] = useState([
    { director: 'Atlee', movie: 'James Bond' },
    { director: 'Mohan Lal', movie: 'Avatar' },
  ]);
  const [newDirector, setNewDirector] = useState('');
  const [newMovie, setNewMovie] = useState('');

  const handleAdd = () => {
    if (newDirector && newMovie) {
      setDirectors([...directors, { director: newDirector, movie: newMovie }]);
      setNewDirector('');
      setNewMovie('');
    }
  };

  const handleRemove = (index) => {
    const updatedDirectors = directors.filter((_, i) => i !== index);
    setDirectors(updatedDirectors);
  };

  return (
    <div className='container'>
      <h1><center>Director and Movies</center></h1>
      <div className='input-container'>
        <input
          type="text"
          value={newDirector}
          onChange={(e) => setNewDirector(e.target.value)}
          placeholder="Director Name"
        />
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Movie Name"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className='list-container'>
        {directors.map((item, index) => (
          <div key={index} className='list-item'>
            <span>{item.director}</span>
            <span>{item.movie}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorMovies;

