import { useRecoilValue } from "recoil";
import { filteredTasksSelector } from "../selectors/filteredTasksSelector";
import TaskItem from "./TaskItem";

function TaskList() {

    const tasks = useRecoilValue(filteredTasksSelector);

    if(tasks.length === 0){

        return(
            <p style={{textAlign:"center"}}>
                Nenhuma tarefa encontrada.
            </p>
        );
    }

    return(
        <ul>
            {
                tasks.map(task=>(
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </ul>
    );
}

export default TaskList;