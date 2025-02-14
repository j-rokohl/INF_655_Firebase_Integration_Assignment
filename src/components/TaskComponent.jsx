function TaskComponent() {
    const toDo = [
        "Wash dishes",
        "Do homework",
        "Do Laundry",
        "Pick up groceries",
        "Do taxes",
        "Put gas in the car",
        "Order birthday gift for Mom",
        "Prepare lunch for tomorrow"
    ];

    const getRandomTask = () => {
        const ran = Math.floor(Math.random() * 8);
        return toDo[ran];
    };

    return(
        <div>
            <h1 className="h1-sm">To Do List</h1>
            <p className="width">The first thing to do is:</p>
            <h3>{getRandomTask()}</h3>
        </div>
    )
};

export default TaskComponent;