import Task from "../components/Task/Task";
import { Routes, Route } from 'react-router-dom';
import NewTask from "../components/Task/NewTask";

export default function TaskRoutes() {
  return (
      <Routes>
          <Route path="/task">
            <Route path=":id" element={<Task />}></Route>
            <Route path="newTask" element={<NewTask />}></Route>
          </Route>
      </Routes>
  );
}