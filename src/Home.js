
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

 export const FilterFilms = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [noteFilter, setNoteFilter] = useState('');

  const handleFilter = () => {
    onFilter({ title: titleFilter, note: parseInt(noteFilter) });
  };

  return (
    <div>
      <input type="text" placeholder="Filtrer par titre" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
      <input type="number" placeholder="Filtrer par note" value={noteFilter} onChange={(e) => setNoteFilter(e.target.value)} />
      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
};
const Home = ({films}) => {
 
  const FilmCard = ({ film }) => {
    return (
      <div className="film-card">
        <img src={film.posterURL} alt={film.title} />
        <h1>{film.title}</h1>
        <h2>{film.description}</h2>
        <p>Note: {film.note}</p>
      </div>
    );
  };

  
  return (
    <div className='liste'>
      <h1>Liste de films</h1>
      <div className='filter'>
    <FilterFilms/>
   
  </div>
      <div className="film-list">
        {films.map((film) => (
          <Link key={film.id} to={`/film/${film.id}/${encodeURIComponent(film.trailerUrl)}`}>
            <FilmCard film={film} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

