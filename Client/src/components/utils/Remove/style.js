import styled from 'styled-components';
import tw from 'twin.macro';

export const RemoveButton = styled.button`${tw`
bg-white
rounded
p-1
mt-3
cursor-pointer
transition
duration-300
ease-in-out
`}
border:1.4px solid lightgray ;
&:hover {
    color:blue;
    border:1.4px solid blue
}
`