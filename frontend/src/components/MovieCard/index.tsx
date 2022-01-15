import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import './styles.css';

const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg",
    title: "Star Wars: Episódio I - A Ameaça Fantasma",
    count: 2,
    score: 4.5
};

function MovieCard() {

  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />

        <Link to={`/form/{$movie.id}`}>
          <div className="btn btn-warning dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard
