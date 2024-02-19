import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
h-fit
bg-white
shadow-lg
rounded
absolute
top-[48px]
right-[10px]

flex flex-col
`}`;

export const Option = styled.div`${tw`

cursor-pointer
hover:bg-gray-500
hover:text-white


`}
`;
export const Wrapper = styled.div`${tw`

flex gap-1 items-center
py-2
px-2
`}`;
export const Text = styled.span`${tw`
text-[14px]
`}`;



