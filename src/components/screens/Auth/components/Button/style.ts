import styled from "styled-components";

export const ButtonWrapper = styled.button`
    padding: .4em;
    border: none;
    cursor: pointer;
    font-size: calc(1rem + .8vw);
    background-color: ${({theme}) => theme.cyan800};
    color: ${({theme}) => theme.white};
    font-weight: bolder;
    border-radius: .5em;
    transition: margin ease .4s;
    :hover {
        
    }
`;