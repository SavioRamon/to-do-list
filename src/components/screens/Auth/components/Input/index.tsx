import { InputWrapper, LabelWrapper } from "./style";


type Props = {
    type: string;
    placeholder: string;
    title: string;
}

export default function Input(props: Props) {
    return (
        <LabelWrapper>
            {props.title}
            <InputWrapper
                type={props.type}
                placeholder={props.placeholder}
            >

            </InputWrapper>
        </LabelWrapper>
        
    );
}