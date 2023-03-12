import { Content } from "./style";
import { AiOutlinePlus } from "react-icons/ai";


type Props = {
    action: () => void;
}

export default function AddTask(props: Props) {
    return (
        <Content onClick={props.action}>
            <AiOutlinePlus />
        </Content>
    );
}