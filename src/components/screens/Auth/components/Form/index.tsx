import { FormWrapper } from "./style";

type Props = {
    children: JSX.Element;
}

export default function Form(props: Props) {
    return (
        <FormWrapper>
            {props.children}
        </FormWrapper>
    );
}
