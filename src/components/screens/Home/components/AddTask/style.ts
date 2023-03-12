import styled from "styled-components";


export const Content = styled.button`
    padding: .4em;
    border: none;
    background-color: ${({theme}) => theme.cyan800};
    position: fixed;
    right: .5em;
    bottom: .5em;
    font-size: calc(1.4rem + 1vw);
    display: flex;
    cursor: pointer;
    color: ${({theme}) => theme.white};
    transition: border-radius ease .2s;
    border-radius: 20%;
    :hover {
        border-radius: 50%;
    }
`;