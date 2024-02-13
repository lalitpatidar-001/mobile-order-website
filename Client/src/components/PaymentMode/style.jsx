import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
${tw`
flex flex-col gap-[2px]
w-full
`}`
export const Wrapper = styled.div`
${tw`
flex flex-col 
`}`
export const Input = styled.input`
${tw`
`}`
export const Label = styled.label`
${tw`
w-[100%]
py-4
bg-white
cursor-pointer
text-[14px]
text-gray-800
`}`
export const InnerLabel = styled.label`
${tw`
w-[100%]
pl-8
py-2
flex gap-2 items-center 
bg-white
cursor-pointer
`}`
