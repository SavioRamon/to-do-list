import styled from "styled-components";

export const Content = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ShadowScreenButton = styled.button`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.gray};
    opacity: .4;
    border: none;
    cursor: pointer;
`;


export const TaskManager = styled.div`
    width: calc(25rem + 15vw);
    z-index: 10;
    padding: calc(.8rem + .7vw);
    background-color: ${({theme}) => theme.backgroundSecondary};
    border-radius: calc(1rem + .7vw);
    position: relative;
`;


export const ContentTitle = styled.h2`
    font-size: calc(1.2rem + .9vw);
    text-align: center;
`;


export const InputWrapper = styled.label`
    margin: calc(1.5rem + 1.2vw) 0;
    padding: calc(.6rem + .5vw);
    display: flex;
    flex-direction: column;
    border: .1vw solid transparent;
    border-left: .1vw solid ${({theme}) => theme.cyan800};
    border-radius: calc(.6rem + .5vw);
    :focus-within {
        border-color: ${({theme}) => theme.cyan800};
    }

    transition: border-color ease .2s;
`;


export const InputName = styled.span`
    margin-bottom: calc(.2rem + .2vw);
    font-size: calc(.8rem + .6vw);
    opacity: .8;
    cursor: pointer;
`;


export const TaskTitleInput = styled.input`
    font-size: calc(1.1rem + .8vw);
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({theme}) => theme.textColor};
`;


export const TextArea = styled.textarea`
    font-size: calc(1.1rem + .8vw);
    outline: none;
    border: none;
    background-color: inherit;
    color: ${({theme}) => theme.textColor};
    resize: none;
`;


export const CloseContent = styled.button`
    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(90deg);
        }
    }
    font-size: calc(2rem + 1.4vw);
    position: absolute;
    top: calc(.6rem + .5vw);
    right: calc(.6rem + .5vw);
    cursor: pointer;
    border: none;
    background-color: inherit;
    display: flex;
    color: inherit;
    border-radius: 50%;
    transition: color ease .4s;

    :hover, :focus {
        animation: spin normal .3s;
        color: ${({theme}) => theme.cyan800};
    }
`;