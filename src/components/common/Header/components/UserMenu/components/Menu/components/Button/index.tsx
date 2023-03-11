import { MenuButton } from "./style";


type Props = {
    action: () => void;
    children: string;
}

export default function Button(props: Props) {
    return (
        <MenuButton onClick={props.action}>
            {props.children}
        </MenuButton>
    )
}