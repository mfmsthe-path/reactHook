import React, { useState } from 'react';
import './App.css'; // Ajoutez un fichier App.css pour les styles

// Composant FilmCard
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

// Composant Liste de films
const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
    </div>
  );
};

// Composant Filtrer
const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filtrer par titre" onChange={(e) => handleFilterChange('title', e.target.value)} />
      <input type="number" placeholder="Filtrer par note" onChange={(e) => handleFilterChange('note', e.target.value)} />
    </div>
  );
};

// Composant principal
const App = () => {
  const [films, setFilms] = useState([
    { title: 'Power', description: 'la série met en scène lhistoire de James St. Patrick, surnommé Ghost, un riche propriétaire de night-club à New York qui mène une double vie en tant que baron de la drogue', posterURL: '/Movie/3661134.webp', note: 7 },
    { title: 'PowerBookII', description: 'Power Book II: Ghost est une série télévisée américaine qui fait suite à la série originale "Power". Elle se concentre sur le personnage de Tariq St. Patrick, le fils de Ghost, alors quil tente de trouver un équilibre entre sa vie d étudiant à luniversité et son implication dans le monde du crime pour aider sa mère.', posterURL: '/Movie/POWERBOOKIIGHOSTY2020S01E001-474x677-PST.jpg', note: 8},
    { title: 'FORCE', description: "Force est une série télévisée française créée par Frank Philippon et réalisée par David Oelhoffen. Elle met en scène une unité de la police anti-criminalité à Marseille. La série explore les thèmes de la violence, de la corruption et de la loyauté au sein de l'unité." , posterURL: '/Movie/0506905.jpg', note: 9 },
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);
  
  const handleFilterChange = (type, value) => {
    if (type === 'title') {
      const filtered = films.filter(film => film.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredFilms(filtered);
    } else if (type === 'note') {
      const filtered = films.filter(film => film.note >= parseInt(value));
      setFilteredFilms(filtered);
    }
  };

  const handleAddFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  return (
    <div className="app">
      <h1 className="title">Liste de films</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <FilmList films={filteredFilms} />
      <button className="add-film-button" onClick={() => handleAddFilm({ title: 'Nouveau Film', description: 'Description du nouveau film', posterURL: 'url', note: 7 })}>Ajouter un nouveau film</button>
    </div>
  );
};

export default App;



