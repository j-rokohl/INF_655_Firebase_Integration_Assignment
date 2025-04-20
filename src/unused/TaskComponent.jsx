import { useState } from 'react';
import SearchTask from "./SearchTasks";

export default function TaskComponent() {
    const fiveTasks = [
        { id: 1, task: "Wash dishes" },
        { id: 2, task: "Do homework" },
        { id: 3, task: "Pick up groceries" },
        { id: 4, task: "Put gas in the car" },
        { id: 5, task: "Prepare lunch for tomorrow" }
      ];

    //   Search

    const [search, setSearch] = useState("");

    const result = fiveTasks.filter((task) => 
        task.task.toLowerCase().includes(search.toLowerCase())
        );

    const sortedResult = [...result].sort((a, b) => a.task.localeCompare(b.task));

    //   Sort Alphabetically 

    const [isPressed, setIsPressed] = useState(false);

    const press = () => {
        setIsPressed(true);
      };

      return (
        <div>
            <h3 className="h1-sm">Search Tasks:</h3>
            <>
            <SearchTask search={search} setSearch={setSearch} />
            <h3 className="h1-sm">To Do List:</h3>
            {result.length ? (
            <div className='parent'>
                <div className='child'>
                    <ul>
                    { isPressed ? 
                    sortedResult.map((task)=> (
                        <li key={task.id}>{task.task}</li>
                    ))
                    : result.map((task)=> (
                        <li key={task.id}>{task.task}</li>
                    ))}
                    </ul>
                </div>
            </div>
            ) : (
                <p>Task List is empty.</p>
            )}
            </>
            <button className="btn" onMouseDown={press}>Sort by Name</button>
            {/* {console.log(sortedResult)} */}
        </div>
      )
};