import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "Api/Api";
import { useEffect, useState } from "react";
import MoviesGallery from "components/MoviesGallery/MoviesGallery";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") === null ? "" : searchParams.get("query");
    const [movies, setMovies] = useState([]);
    
    console.log(query)


    useEffect(() => {

        const fetchMovies = async () => {


            try {
                const response = await fetchMovieByQuery(query);
                setMovies(response.data.results)
            } catch (error) {
                console.log(error)
            };
        };

        fetchMovies();


    }, [query]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({query: e.target.elements.input.value});
    };





    return (<>
        <div>

            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="input"
                />
                <button type="submit">Submit</button>
            </form>

            <MoviesGallery movies={movies} />

        </div>


    </>);
};
export default Movies;