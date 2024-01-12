import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
${tw`
    flex-[2]
    w-full
    h-[55vh]
    bg-white
    flex flex-col gap-2
    shadow-lg
    sticky
    top-[66px]
`}`

export const Heading = styled.div`
${tw
`
py-4
p-2
text-[#878787]
font-[600]
`}
border-bottom:1px solid lightgray
`

export const Details = styled.div`
${tw`
flex
flex-col
gap-3
p-3

`}
border-bottom:1px solid lightgray
`
export const Item = styled.div`
${tw`
flex
justify-between

`}`

export const ItemName = styled.span`${tw`

`}`
export const Charges = styled.span`${tw`

`}`

export const TotalDiv = styled.div`
${tw`
flex
justify-between

px-3
py-3
font-[600]
`}
border-bottom:1px solid lightgray
`

export const TotalSpan = styled.span`${tw`

`}`

export const TotalPrice = styled.span`${tw`

`}`
export const PlaceOrder = styled.button`
${tw`
    w-fit
    bg-orange-500
    border-none
    px-6
    py-3
    text-white
    font-[600]
    self-end
    m-3
    rounded
    shadow-lg
    cursor-pointer
`}`

export const SaveSpan = styled.span`
${tw`
text-[14px]
font-[600]
text-[#388E3C]
px-3
flex
items-center
`}`