import React, { useContext, useState } from 'react'
import { Container, Input } from './inputStyle'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';
import { userContext } from '../../../context/userContext';

const ReviewInput = ({specsId}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(userContext);
    const [review, setReview] = useState("");

    const handelSendReview = async(e) => {
        if (review.length > 0) {
            try{
                const response = await axios.post("http://localhost:5000/api/review/add-review",{
                        userId:isLoggedIn?._id,
                        specsId:specsId,
                        text:review
                });
                console.log(response)
                setReview("")
            }catch(error){
                console.log(error)
            }
            
        }
    }
    return (
        <>
            <Container>
                <RateReviewOutlinedIcon className='' style={{ color: "gray", fontSize: 20 }} />
                <Input
                value={review}
                    onChange={(e) => setReview(e.target.value)}
                    type="text" placeholder='Add your review...' />
                <SendOutlinedIcon
                    onClick={handelSendReview}
                    style={{ cursor: "pointer" }} />
            </Container>
        </>
    )
}

export default ReviewInput