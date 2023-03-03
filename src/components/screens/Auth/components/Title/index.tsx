
import { TitleWrapper } from "./style";


type Props = {
    children: string;
}

export default function Title(props: Props) {
    return (
        <TitleWrapper>
            {props.children}
        </TitleWrapper>
    );
}