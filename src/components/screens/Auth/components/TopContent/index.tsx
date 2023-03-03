import Title from "../Title";
import { Image, Wrapper } from "./style";
import tasks from "../../../../../assets/icons/tasks.svg";

type Props = {
    children: string;
}

export default function TopContent(props: Props) {
    return (
        <Wrapper>
            <Image src={tasks} alt="image of a light blue rectangle with a 'check' symbol in the middle symbolizing a task. There is a second yellow rectangle visible behind the blue rectangle" />
            <Title>
                {props.children}
            </Title>
        </Wrapper>
    )
}