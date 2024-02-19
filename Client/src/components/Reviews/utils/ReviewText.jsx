import React, { useState } from 'react'
import { Container, ReplyContainer, ReviewTime, Text, UserInfo, UserName } from './textStyle'
import ReviewActions from './ReviewActions';
import {format} from "timeago.js"

const ReviewText = ({_id,text,replies,createdAt,userId}) => {
    const [ShowReply , setShowReply] = useState(false)
  return (
    <Container>
        <UserInfo>
            <UserName>{userId?.username}</UserName>
            <ReviewTime>{format(createdAt)}</ReviewTime>
        </UserInfo>
        <Text>{text}</Text>
        <ReviewActions userId={userId?._id} reviewId={_id} replies={replies} setShowReply={setShowReply} ShowReply={ShowReply}/>
        {ShowReply && <ReplyContainer>
        {replies.map((reply)=>(
        <ReviewText {...reply}/>
        ))

        }
        </ReplyContainer>}
    </Container>
  )
}

export default ReviewText