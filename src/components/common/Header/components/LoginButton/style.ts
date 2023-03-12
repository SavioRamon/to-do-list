import styled from "styled-components";


export const Button = styled.button`
    padding: .3em;
    border: none;
    background-color: inherit;
    font-size: calc(1rem + .8vw);
    cursor: pointer;
    border-radius: 10%;
    color: inherit;
    :hover {
        background-color: ${({theme}) => theme.backgroundSecondary};
    }
`;