import { useState } from "react";
import NewTask from "./components/NewTask"
import ListTaches from "./components/ListTaches";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  return(
    <>
    <NewTask sendToParent={(value) => setTasks(prevState => [...prevState,value])}/>
    <ListTaches tasks={tasks}/>
    </>
  )
}