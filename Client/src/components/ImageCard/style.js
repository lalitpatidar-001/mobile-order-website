import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
 flex-[2]
 w-full
 flex
 flex-col
 h-[calc(100vh-54px)]
 sticky
 top-[54px]
 border-r-2
 border-black
 bg-white
 mt-1
 pb-2
`}
border-right:1px solid lightgray
`;

export const Image = styled.img`${tw`
w-[100%]
h-[calc(78vh)]
`}`

export const SmallImageDiv = styled.div`${tw`
h-[70px]
flex
justify-center
gap-[2px]
`}
/* background-color:lightgray; */
`
export const SmallImage = styled.img`${tw`
w-[80px]
cursor-pointer
bg-white
rounded

`}
border:1.4px solid lightgray
`