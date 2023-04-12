import MoviesGallery from "components/MoviesGallery/MoviesGallery";
import { useEffect, useState } from "react";
import {fetchTrendings} from "../Api/Api"

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchMovies = async () => {
            

            try {
                const response = await fetchTrendings();
                // console.log(response.data);
                setMovies(response.data.results)
            } catch (error) {
            
            };
        };

        fetchMovies();

       
    }, []);

    return (<>
        <MoviesGallery movies={movies} />

    </>);
};
export default Home;