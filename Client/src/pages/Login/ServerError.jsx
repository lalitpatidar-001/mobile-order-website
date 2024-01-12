import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

export const ErrorMeassage = styled.div`${tw`
text-red-500
`}`
const ServerError = ({errors}) => {
  return (
    <>
        {
            errors.map(error=>{
                return <ErrorMeassage>{error}</ErrorMeassage>
            })
        }
    </>
  )
}

export default ServerError