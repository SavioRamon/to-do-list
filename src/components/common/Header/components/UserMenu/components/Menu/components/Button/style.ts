import styled from "styled-components";


export const MenuButton = styled.button`
    width: 100%;
    padding: .5em;
    border: none;
    cursor: pointer;
    font-size: calc(1rem + .6vw);
    background-color: inherit;
    :hover {
        background-color: ${({theme}) => theme.gray};
    }
    display: flex;
    align-items: center;
    color: inherit;
`;

export const IconWrapper = styled.div`
    margin: 0 .4em;
    font-size: calc(1.1rem + .7vw);
    display: flex;
`;