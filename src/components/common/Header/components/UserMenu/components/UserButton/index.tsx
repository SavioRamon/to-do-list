import { useAuth } from "../../../../../../../context/AuthContext";
import { Button, Image } from "./style";


type Props = {
    action: () => void;
}

export default function UserButton(props: Props) {

    const { user } = useAuth();

    return (
        <Button onClick={props.action}>
            {user &&
                <Image src={user.photoURL!} alt="your user image" />
            }
        </Button>
    )
}