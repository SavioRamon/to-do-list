import { useAuth } from "../../../context/AuthContext";
import AddTask from "./components/AddTask";
import { Container } from "./style";


export default function Home() {

    const { user } = useAuth();
    return (
        <Container>
            Home
            
            {user &&
                <AddTask />
            }
        </Container>
    );
}