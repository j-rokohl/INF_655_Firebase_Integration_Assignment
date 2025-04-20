import  {useState} from "react";
import TaskData from "./TaskData";
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup";
import { useFormik } from "formik"; 

export default function NewTaskForm( ) {

const [taskList, setTaskList] = useState(TaskData);

const formik = useFormik ({
    initialValues: {
        name: "",
        description: "",
    },

    validationSchema: Yup.object({
        name: Yup.string().required("A task name is required to submit."),
        description: Yup.string().required("A task description is required to submit."),
    }),

    onSubmit: (values) => {
        const newId = uuidv4();
        const updatedValues = { ...values, id: newId };
        console.log(updatedValues);
        setTaskList([updatedValues, ...taskList]);
        document.getElementById("my-form").reset();
        formik.resetForm();
    },
});

    return (
    <div>
        <form onSubmit={formik.handleSubmit} id="my-form">
            <div className="block">
            <h2>Add a Task and Description</h2>
                <label htmlFor="name" className="bold block">Task Name: <span className="red">*</span></label>
                <p className={`${formik.errors.name ? "" : "display-none"}`}><span className={`${formik.errors.name ? "error" : "display-none"}`}>{formik.errors.name}</span></p>
                <input 
                type="text" 
                placeholder="What is your task?" 
                id="name"
                onChange={formik.handleChange}
                />
                <label htmlFor="description" className="bold block">Task Description: <span className="red">*</span></label>
                <p className={`${formik.errors.description && formik.touched.description ? "" : "display-none"}`}><span className={`${formik.errors.description && formik.touched.description ? "error" : "display-none"}`}>{formik.errors.description}</span></p>
                <input 
                type="text" 
                placeholder="Describe this task."  
                id="description"
                onChange={formik.handleChange}
                />
            </div>
            <button className="btn" type="submit">Add Task to List</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                <>
                    { taskList.map((task)=> (
                        <tr key={task.id}>
                            <td> {task.name} </td>
                            <td> {task.description} </td>
                        </tr>
                    ))}
                </>
                }
            </tbody>
        </table>
    </div>
    );
}