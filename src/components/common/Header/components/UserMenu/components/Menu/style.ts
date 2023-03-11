import styled from "styled-components";


export const MenuContent = styled.div`
    right: calc(3rem + 3vw);
    padding: calc(.5rem + .5vw) 0;
    background-color: ${({theme}) => theme.backgroundSecondary};
    position: absolute;
    border-radius: 10%;
`;