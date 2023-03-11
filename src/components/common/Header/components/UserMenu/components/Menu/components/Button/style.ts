import styled from "styled-components";


export const MenuButton = styled.button`
    padding: .3em;
    border: none;
    cursor: pointer;
    font-size: calc(1rem + .6vw);
    background-color: inherit;
    :hover {
        background-color: ${({theme}) => theme.gray};
    }
`;