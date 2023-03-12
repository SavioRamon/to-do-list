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
    background-color: ${({theme}) => theme.backgroundColor};
    opacity: .8;
    border: none;
    cursor: pointer;
`;


export const TaskManager = styled.div`
    width: calc(25rem + 15vw);
    z-index: 10;
    padding: calc(.8rem + .7vw);
    background-color: ${({theme}) => theme.backgroundSecondary};
    border-radius: calc(1rem + .7vw);
`;


export const ContentTitle = styled.h2`
    font-size: calc(1.2rem + .9vw);
    text-align: center;
`;


export const InputWrapper = styled.label`
    margin: calc(1.5rem + 1.2vw) 0;
    display: flex;
    flex-direction: column;
    cursor: text;
`;


export const InputName = styled.span`
    margin-bottom: calc(.2rem + .2vw);
    font-size: calc(.8rem + .6vw);
    opacity: .8;
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