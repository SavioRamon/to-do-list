import { FormWrapper } from "./style";

type Props = {
    children: string;
}

export default function Form(props: Props) {
    return (
        <FormWrapper>
            {props.children}
        </FormWrapper>
    );
}
