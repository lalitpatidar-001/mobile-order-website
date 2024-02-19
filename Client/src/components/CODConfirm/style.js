import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`${tw`
pl-8
pt-2
flex gap-2
`}`;

export const CaptchaDiv = styled.div`${tw`
flex gap-1
items-center
p-2
bg-[#FFFFFF]
border-[2px]
shadow-md
`}
border:1px solid gray;
`;
export const RefreshCaptcha = styled.div`${tw`
flex 

`}`;
export const CaptchaError = styled.div`${tw`
text-red-500
font-semibold


`}`;

export const Captcha = styled.span`${tw`
 
 text-green-500
 font-semibold
 text-xl
 font-serif

 tracking-[3px]

 w-fit
 cursor-default
`}

`;

export const Input = styled.input`${tw`
 p-2
 font-mono
 font-serif
 bg-[#FFFFFF]
 shadow-md
 w-fit
 outline-none
 rounded-[2px]
`}
border:1px solid gray;
`;
export const ConfirmButton = styled.button`${tw`
 p-2
 px-3
 w-fit
 text-[16px]
 bg-orange-500
 border-none
 text-white
 shadow-md
 font-semibold
 rounded-[2px]
 cursor-pointer
 flex flex-col
 items-center
`}
`

export const ButtonText = styled.span`${tw`


`}`;
export const ButtonAmount = styled.span`${tw`

flex items-center
`}`;