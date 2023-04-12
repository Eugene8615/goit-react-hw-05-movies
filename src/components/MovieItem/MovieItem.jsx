import { Container } from "./MovieItem.styled";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const MovieItem = ({ movie }) => {
  

    const image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const score = movie.vote_average * 10;
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
  

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to={backLinkHref}>Go back</Link>
                <img width="300" height="450" src={image} alt="" />
            </div>
            <div>
            <h2> {movie.title}</h2>
            <p>User score: { score.toFixed() === "NaN" ? null : score.toFixed() }%</p>
            <h3>Overview</h3>
            <p>{ movie.overview}</p>
            <h4>Genres</h4>
            {movie.genres?.length > 0 && movie.genres.map(genre => `${genre.name} `)}
        </div></Container>
    );
};

export default MovieItem;

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
};