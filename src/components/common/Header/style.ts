import styled from "styled-components";

export const Content = styled.header`
    padding: 0 calc(1rem + 1vw);
    width: 100%;
    height: calc(3rem + 3vw);
    position: fixed;
    top: 0;
    background-color: ${({theme}) => theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;