import styled from "styled-components";

export const InputWrapper = styled.input`
    margin-top: .4em;
    font-size: calc(1rem + .8vw);
    border: none;
    outline: none;
    background-color: inherit;
`;


export const LabelWrapper = styled.label`
    padding: calc(.3rem + .3vw);
    margin: calc(.5rem + .5vw) 0;
    display: flex;
    flex-direction: column;
    font-size: calc(.7rem + .5vw);
    border: .1vw solid transparent;
    border-radius: .4vw;
    :focus-within {
        border-color: ${({theme}) => theme.cyan100};
    }
`;