import React, { useEffect, useState } from 'react'
import { Container, Heading, ReviewsContainer } from './style'
import ReviewInput from './utils/ReviewInput'
import ReviewText from './utils/ReviewText'
import axios from 'axios'
// import {reviews} from "./index"
const Reviews = ({ specsId  }) => {
    console.log("specsIdddd", specsId)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        console.log("use effect ruuning")
        async function getAllReviews(specsId) {
            try {
                const response = await axios.get(`http://localhost:5000/api/review/get-reviews/${specsId}`);
                console.log("response",response)
                setReviews(response?.data?.reviews)
            } catch (error) {
                console.log(error)
            }
        }
    if(specsId) getAllReviews(specsId)
    }, [specsId]);

    return (
        <Container>
            <Heading>Reviews</Heading>
            <ReviewInput specsId={specsId} />

            <ReviewsContainer>
                {reviews.map((review) => (
                    <ReviewText {...review} />
                ))
                }
            </ReviewsContainer>
        </Container>
    )
}

export default Reviews