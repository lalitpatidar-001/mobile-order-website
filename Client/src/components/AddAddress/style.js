import styled from 'styled-components'
import tw from 'twin.macro'

export const Form = styled.form`
${tw`
flex flex-col gap-2 
w-[800px]

rounded
border-[2px]
border-blue-500
`}`


export const InputGroup = styled.div`
${tw`
flex
w-full
gap-1
`}`
export const Input = styled.input`
${tw`
p-2
py-3

w-full
outline-none
border-none
rounded
`}`

export const ButtonWrapper = styled.div`
${tw`
flex gap-3
w-full
`}`
export const Button = styled.button`
${tw`
flex-1
p-2
px-4
text-white
bg-orange-500
border-none
rounded
font-semibold
cursor-pointer
`}`
export const CancelButton = styled.button`
${tw`
flex-1
p-2
px-4
bg-transparent
cursor-pointer
text-blue-500
border-[1px]
border-blue-500
rounded
`}`
