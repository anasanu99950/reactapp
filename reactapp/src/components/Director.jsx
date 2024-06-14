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
    <div className="container">
      <h1 className="heading">Director and Movies</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Director Name</th>
            <th>Movie Name</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={newDirector}
                onChange={(e) => setNewDirector(e.target.value)}
                placeholder="Director Name"
                className="input-field"
              />
            </td>
            <td>
              <input
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
                placeholder="Movie Name"
                className="input-field"
              />
            </td>
            <td>
              <button className="add-btn" onClick={handleAdd}>
                Add New
              </button>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {directors.map((item, index) => (
            <tr key={index}>
              <td>{item.director}</td>
              <td>{item.movie}</td>
              <td></td>
              <td>
                <button className="remove-btn" onClick={() => handleRemove(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DirectorMovies;