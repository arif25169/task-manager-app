import { AddTaskForm } from "../components/TaskForm";
import { TaskTable } from "../components/TaskTable";

export const Home: React.FC = () => (
  <div>
    <AddTaskForm />
    <TaskTable />
  </div>
);
