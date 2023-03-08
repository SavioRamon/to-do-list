import styled, { css } from "styled-components";

export const Span = styled.span`
    margin: 1em 0;
    font-size: calc(.7rem + .5vw);
    width: 100%;
    ${(props: {center?: boolean}) => (
        (props.center) && css`
            display: flex;
            justify-content: center;
        `
    )}
`;

export const InlineButton = styled.input`
    font-size: inherit;
    border: none;
    color: ${({theme}) => theme.cyan100};
    cursor: pointer;
    text-indent: .4em;
    :hover {
        text-decoration: underline;
    }
`;