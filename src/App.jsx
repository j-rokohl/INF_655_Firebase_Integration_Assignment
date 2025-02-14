import './App.css'
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';

function App() {
  return (
    <div className='App'>
       <h1>Assignment 1</h1>
       <div className="task">Task 1: Create a React Component Using JSX</div>
       <Greeting />
       <div className="task">Task 2: Create a Class Component and Use JSX</div>
       <UserInfo />
       <div className="task">Task 3: Dynamic Content Using JSX and React Components</div>
       <TaskComponent />
    </div>
  )
}

export default App;
