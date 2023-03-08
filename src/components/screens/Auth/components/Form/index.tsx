import { FormWrapper } from "./style";

type Props = {
    children: JSX.Element;
}

export default function Form(props: Props) {
    return (
        <FormWrapper onSubmit={(e) => e.preventDefault()}>
            {props.children}
        </FormWrapper>
    );
}
