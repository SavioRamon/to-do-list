import type React from "react";
import { InputWrapper, LabelWrapper } from "./style";


type Props = {
    type: string;
    placeholder: string;
    title: string;
    change: React.Dispatch<React.SetStateAction<string>>
}

export default function Input(props: Props) {
    return (
        <LabelWrapper>
            {props.title}
            <InputWrapper
                type={props.type}
                placeholder={props.placeholder}
                onChange={(e) => {props.change(e.target.value)}}
            >

            </InputWrapper>
        </LabelWrapper>
        
    );
}