import { useParams } from "react-router-dom";
import { fetchMovieById } from "Api/Api";
import { useEffect, useState, Suspense } from "react";
import MovieItem from "components/MovieItem/MovieItem";
import { Link,Outlet } from "react-router-dom";


const MovieDetails = () => { 

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
     const fetchMovie = async () => {
        
        try {
            const response = await fetchMovieById(movieId);
            setMovie(response.data);
        } catch (error) {
            console.log(error);
         };

    };

        fetchMovie();

    }, [movieId]);

   
    
    
    

    return (
        <>  
            <MovieItem movie={movie} />
            
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </>
    );

};
export default MovieDetails;