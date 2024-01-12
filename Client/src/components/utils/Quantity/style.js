import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
flex 
gap-2
`}`;
export const Button = styled.button`
${tw`
bg-white
text-black
w-[20px]
h-[20px]
rounded-full
font-semibold
cursor-pointer
flex
items-center
justify-center
transition
duration-500
ease-in-out
`

}
border:1px solid lightgray;
&:hover {
    color:blue;
    border:1.4px solid blue
    
}
`




export const Number = styled.span`
${tw`
    h-[20px]
    w-fit
    px-2
    text-black
    flex
    rounded
    justify-center
    cursor-default
`}
border:1px solid lightgray
`