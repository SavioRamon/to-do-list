import { InlineButton, Span } from "./style";


type Props = {
    text: string;
    children: string;
    center?: boolean;
    action: () => void;
}

export default function ButtonInline(props: Props) {
    return (
        <Span center={props.center}>
            {props.text}
            <InlineButton type="button" onClick={props.action} value={props.children} />
        </Span>
    );
}