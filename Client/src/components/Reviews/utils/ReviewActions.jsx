import React, { useState } from 'react'
import { ButtonContainer, Container, Input, InputBox, RepliesCount, Reply, ShowReplies } from './actionStyle'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';

const ReviewActions = ({ ShowReply, setShowReply, replies, reviewId ,userId}) => {
  const [reply, setReply] = useState("");
  const handleShowReplyClick = () => {
    setShowReply(!ShowReply)
  };

  const handelSendReply = async() => {
      if(reply.length>0){
        try{
          const response = await axios.post(`http://localhost:5000/api/review/add-reply/${reviewId}`,{
              userId,
              text:reply
          });
          console.log(response);
          setReply("")
        }catch(error){
          console.log(error)
        } 
      }
  }

  return (
    <Container>
      <ButtonContainer>
        {replies.length > 0 && <ShowReplies onClick={handleShowReplyClick}>{ShowReply ? "Hide Reply" : "Show Reply"}</ShowReplies>}
        <Reply>Reply</Reply>
      </ButtonContainer>
      <InputBox>
        <ReplyOutlinedIcon style={{ fontSize: 14 }} />
        <Input
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          type="text" placeholder='Add your review...' />
        <SendOutlinedIcon
          onClick={handelSendReply}
          style={{ cursor: "pointer", fontSize: 16 }} />
      </InputBox>
    </Container>
  )
}

export default ReviewActions