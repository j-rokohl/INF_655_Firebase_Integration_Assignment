import Tasks from '../components/Task/Tasks';
import AddTask from '../components/Task/AddTask';
import { getAuth } from "firebase/auth";
import { auth } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";


export default function HomePage() {

const { user } = UserAuth();

  // const user = auth.currentUser;
  
    const displayName = user.displayName;
    console.log(user);

    return (
      <div className='App'>
        <header>
          <h2 className='text-center'>Welcome back, {displayName}!</h2>
          <AddTask />
          <Tasks />
        </header>
      </div>
    )
  
}
