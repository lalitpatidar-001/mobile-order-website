import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

export const FeedBackContainer = styled.div`${tw`
text-red-500
font-semibold
`}`

const FeedBack = ({feedback}) => {
  return (
    <FeedBackContainer>{feedback}</FeedBackContainer>
  )
}

export default FeedBack