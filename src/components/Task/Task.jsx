import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";
import { useContext } from "react";


export default function Task ({ 
    id,
    title, 
    description, 
    checked, 
    task,
}) {

const {checkTask, deleteTask, editTask} = useContext(TaskContext);

    return (
    <div>
        <Card>
            {/* <input className="left-marg" 
            type="checkbox" 
            checked={checked} onChange={() => checkTask(id)}/> */}
            <div className="left-marg"><h4 
            style={checked ? { textDecoration : "line-through" } : null}>{title}</h4></div>
            <div className="left-marg" style={checked ? { textDecoration : "line-through" } : null}>{description}</div>
            <button onClick={()=> editTask(task)} className="edit"> 
                <FaEdit />
            </button>
            <button onClick={()=> deleteTask(id)} className="delete"> 
                <FaTrashAlt />
            </button>
        </Card>
    </div>
    );
}