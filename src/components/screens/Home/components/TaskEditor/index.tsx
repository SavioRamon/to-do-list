import {
    Content,
    ShadowScreenButton,
    TaskManager,
    ContentTitle,
    TaskTitleInput,
    InputWrapper,
    InputName,
    TextArea
} from "./style";


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