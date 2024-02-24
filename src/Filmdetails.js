import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FilmDetails = ({ films }) => {
  const { id, trailerUrl } = useParams(); // Récupère l'ID du film et l'URL de la bande-annonce depuis l'URL
  const navigate = useNavigate();

  // Recherche du film correspondant à l'ID dans le tableau de films
  const film = films.find(film => film.id === parseInt(id));

  // Si le film correspondant à l'ID n'est pas trouvé, affiche un message d'erreur
  if (!film) {
    return <div>Le film n'a pas été trouvé.</div>;
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Retour à la page d'accueil</button>
      <div className='text-colour'>
        <h2>{film.title}</h2>
        <p>{film.description}</p>
        <iframe
          width="560"
          height="315"
          src={trailerUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default FilmDetails;

