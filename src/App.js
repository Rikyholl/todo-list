import { useState } from "react";
import AddTask from "./Components/Addtask";
import ListTasks from "./Components/ListTasks";

function App() {


  const [tasks, setTasks] = useState([]);


  console.log(tasks);

  return (
    
    <div className="intro">
      <h2 className="intro_title"> Мой список задач</h2>

      <ListTasks 
        tasks={tasks} setTasks={setTasks}
      />
      <AddTask 
        tasks={tasks} setTasks={setTasks}
      />
    </div>
  );
}

export default App;
