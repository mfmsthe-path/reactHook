import react from 'react';
import './App.css'; // Ajoutez un fichier App.css pour les styles
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FilmDetails from './Filmdetails';




const App = () => {


  // Chaque FilmCard devrait être enveloppé dans un Link qui mène à la page de détails du film
  const films = [
    {id: 1 , title: 'Power', description: 'la série met en scène lhistoire de James St. Patrick, surnommé Ghost, un riche propriétaire de night-club à New York qui mène une double vie en tant que baron de la drogue', posterURL: '/Movie/3661134.webp', note: 7, trailerUrl: '/Movie/Power - Season 1 _ Trailer _ Streaming On SonyLIV(720P_HD).mp4'},
    {id: 2 , title: 'PowerBookII', description: 'Power Book II: Ghost est une série télévisée américaine qui fait suite à la série originale "Power". Elle se concentre sur le personnage de Tariq St. Patrick, le fils de Ghost, alors quil tente de trouver un équilibre entre sa vie d étudiant à luniversité et son implication dans le monde du crime pour aider sa mère.', posterURL: '/Movie/POWERBOOKIIGHOSTY2020S01E001-474x677-PST.jpg', note: 8,trailerUrl:'/Movie/POWER BOOK II_ GHOST Bande Annonce VF (STARZPLAY_ 2020)(720P_HD).mp4'},
    {id: 3 , title: 'FORCE', description: "Force est une série télévisée française créée par Frank Philippon et réalisée par David Oelhoffen. Elle met en scène une unité de la police anti-criminalité à Marseille. La série explore les thèmes de la violence, de la corruption et de la loyauté au sein de l'unité." , posterURL: '/Movie/0506905.jpg', note: 9,trailerUrl: '/Movie/Power Book IV_ Force Season 1 Trailer _ Rotten Tomatoes TV(720P_HD).mp4'},
  ];

  return (
    <Routes>
      <Route path="/" element={<Home films={films} />} />
      <Route path="/film/:id/:trailerUrl" element={<FilmDetails films={films} />} />

    </Routes>
  );
};

export default App;


  



