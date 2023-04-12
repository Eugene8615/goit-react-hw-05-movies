import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "Api/Api";
import fallback from "../../imgs/not found.png"
import { Actor } from "./Cast.styles"
import { List } from "./Cast.styles"
import { Img } from "./Cast.styles"


const Cast = () => { 

    

    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    


    useEffect(() => {
     const fetchActor = async () => {
        
        try {
            const response = await fetchCast(movieId);
        
            setActors(response.data.cast);
        } catch (error) {
            console.log(error);
         };

    };

        fetchActor();

    }, [movieId]);

   
    return (<>
        <List>{actors.map((actor) => {
            
            const image = `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
           
            return <Actor key={actor.id}><Img src={actor.profile_path !== null ? image : fallback } alt=""/><p>{actor.name}</p></Actor>} )}</List>
    
    </>);
};

export default Cast;