import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
  flex
  justify-center
  items-center
  h-[100vh]
  bg-[#F1F1F1]
`}`;

export const Form = styled.form`${tw`
  flex
  flex-col
  gap-5
  bg-[#FFDE59]
  p-8
  rounded
  w-full
  xs:w-[400px]
  lg:w-[500px]
`}`;

export const Heading = styled.h1`${tw`
  text-3xl
  mb-12
  font-bold
`}`;

export const Input = styled.input`${tw`
  p-2
  border-2
  rounded
  outline-none
`}`;

export const FeedbackValidation = styled.span`${tw`

    text-red-500
    font-semibold

`}`;

export const Button = styled.button`${tw`
  p-2
  bg-[#FF5757]
  rounded
  mt-5
  w-1/2
  self-center
  font-bold
  cursor-pointer
`}`;

