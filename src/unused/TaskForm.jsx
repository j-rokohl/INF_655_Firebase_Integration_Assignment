import  {useState} from "react";

function TaskForm() {
const [name, setName] = useState('');

const handleNameChange = (e) => {
    setName(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        name
    };
    console.log(newTask.name);
}

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="block">
            <h2>Add a Task</h2>
                <label htmlFor="name" className="bold block">Enter Task Name: </label>
                <input 
                type="text" 
                placeholder="What is your task?" 
                value= {name} 
                name="name"
                onChange={handleNameChange}
                />
            </div>
            <button className="btn" type="submit">Add Task To Console</button>
        </form>
    </div>
    );
}

export default TaskForm;