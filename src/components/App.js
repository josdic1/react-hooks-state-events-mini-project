import { useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(oldTaskText) {
    setTaskList(taskList.filter(task => task.text !== oldTaskText));
  }

  function handleTaskFormSubmit(newTask) {
    setTaskList([newTask, ...taskList]);
  }

  const filteredTasks = taskList.filter(task =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
