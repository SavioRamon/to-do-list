import { ButtonWrapper } from "./style";


type Props = {
    children: string;
    action: () => void;
}

export default function Button(props: Props) {
    return (
        <ButtonWrapper onClick={props.action}>
            {props.children}
        </ButtonWrapper>
    )
}