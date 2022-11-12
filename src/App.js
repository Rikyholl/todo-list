import { useState } from "react";

import AddTask from "./Components/Addtask";
import ListTasks from "./Components/ListTasks";
import Switching_btns from "./Components/Swinching_btns";

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

      <Switching_btns />
    </div>
  );
}

export default App;
