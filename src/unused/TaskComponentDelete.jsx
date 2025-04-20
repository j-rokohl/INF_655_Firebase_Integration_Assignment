import Task from './Task';

export default function TaskComponentDelete( { taskList, handleDelete } ) {

      return (
        <div>
            <>
            <h3 className="h1-sm">To Do List:</h3>
            <div className='parent'>
                <div className='child'>
                    <ul className='ul-block'>
                    {taskList.map((task)=> (
                        <Task 
                        key= {task.id}
                        id={task.id}
                        name= {task.name} 
                        handleDelete={handleDelete}
                        />
                    ))}
                    </ul>
                </div>
            </div>
            </>
        </div>
      )
};