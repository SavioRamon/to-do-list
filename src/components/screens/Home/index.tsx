import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import AddTask from "./components/AddTask";
import TaskEditor from "./components/TaskEditor";
import { Container } from "./style";


export default function Home() {

    const { user } = useAuth();

    const [showTaskCreator, setShowTaskCreator] = useState(false);
    
    function toggleTaskCreator() {
        setShowTaskCreator(!showTaskCreator);
    }

    return (
        <Container>
            Home

            {showTaskCreator &&
                <TaskEditor
                    type="create"
                    title="Create task"
                    closeContent={toggleTaskCreator}
                />
            }
            
            {user &&
                <AddTask action={toggleTaskCreator} />
            }
        </Container>
    );
}