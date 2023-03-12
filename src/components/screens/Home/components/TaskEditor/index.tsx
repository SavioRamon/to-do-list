import {
    Content,
    ShadowScreenButton,
    TaskManager,
    ContentTitle,
    TaskTitleInput,
    InputWrapper,
    InputName,
    TextArea,
    CloseContent
} from "./style";

import { MdOutlineClose } from "react-icons/md";


type Props = {
    type: "create" | "edit";
    title: string;
    closeContent: () => void;
}


export default function TaskEditor(props: Props) {

    return (
        <Content>
            <ShadowScreenButton onClick={props.closeContent} />

            <TaskManager>
                <ContentTitle>{ props.title }</ContentTitle>

                <CloseContent onClick={props.closeContent}>
                    <MdOutlineClose />
                </CloseContent>


                <InputWrapper>
                    <InputName>Title</InputName>

                    <TaskTitleInput type="text" placeholder="Task title" />
                </InputWrapper>


                <InputWrapper>
                    <InputName>Description</InputName>

                    <TextArea placeholder="Task Description"/>
                </InputWrapper>
            </TaskManager>
        </Content>
    );
}