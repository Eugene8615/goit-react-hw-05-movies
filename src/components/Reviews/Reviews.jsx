import { fetchReviewsById } from "Api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => { 

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();
    


    useEffect(() => {
        const fetchReviews = async () => {
            
        
        
        try {
            const response = await fetchReviewsById(movieId);
            console.log(response.data)
            setReviews(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
         };

    };

        fetchReviews();

    }, [movieId]);


    return (

        reviews.length === 0 && !loading ? <p>No reviews</p> :
        <ul>{reviews.map(review => <li key={review.id}><h3>{review.author}</h3><p>{review.content}</p></li>
        )}</ul>
    )
};

export default Reviews;