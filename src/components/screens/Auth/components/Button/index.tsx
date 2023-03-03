import { ButtonWrapper } from "./style";


type Props = {
    children: string;
}

export default function Button(props: Props) {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    )
}