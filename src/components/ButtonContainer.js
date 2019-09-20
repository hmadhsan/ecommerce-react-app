import styled from "styled-components";


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: brown;
border: 0.05rem solid green;
color: #fff;
border-radius: 0.3rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background: yellow;
    color: black;

} 
`;