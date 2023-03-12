import { IconWrapper, MenuButton } from "./style";


type Props = {
    action: () => void;
    icon: JSX.Element;
    children: string;
}

export default function Button(props: Props) {
    return (
        <MenuButton onClick={props.action}>
            
            <IconWrapper>
                {props.icon}
            </IconWrapper>

            {props.children}
        </MenuButton>
    )
}