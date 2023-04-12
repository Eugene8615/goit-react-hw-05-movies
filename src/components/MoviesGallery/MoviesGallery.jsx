import PropTypes from 'prop-types'; 
import { Link, useLocation } from "react-router-dom";
import { Gallery, Film } from "./MoviesGallery.styles"


export default function MoviesGallery({ movies }) {
    const location = useLocation();
    console.log(movies);

    return (
        <Gallery>
            {movies.map(movie => {
                const image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
                return (
                    <Film key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <img src={image} alt={movie.title} />
                            <p>{movie.title}</p>
                        </Link>
                    </Film>
                );
            })}
        </Gallery>
    );
};

MoviesGallery.propTypes = {
    movies: PropTypes.array.isRequired,
};
