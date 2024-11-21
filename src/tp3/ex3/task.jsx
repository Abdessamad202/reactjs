import { useState, useEffect } from "react";
export default function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isDone, setIsDone] = useState(0);
  const handleClick = () => {
    const newTask = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      description: task,
      done: false,
    };
    setTaskList([...taskList, newTask]);
    console.log(taskList);
    setTask("");
  };
  const handleCheck = (e) => {
    const id = parseInt(e.target.id, 10);
    setTaskList((prevState) =>
        prevState.map((element) =>
            element.id === id ? { ...element, done: e.target.checked } : element
        )
    );
  };
  useEffect(() => {
    const completedTasks = taskList.filter((task) => task.done).length;
    setIsDone(completedTasks);
  }, [taskList]);
  const handleDelete = (e) => {
    const id = parseInt(e.target.id, 10);
    setTaskList(taskList.filter((element) => element.id !== id));
  };

  return (
      <>
        <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
        />
        <button onClick={handleClick}>Add Task</button>
        <ul>
          {taskList.map((element, index) => (
              <li key={index}>
                <input
                    id={element.id.toString()}
                    onChange={handleCheck}
                    checked={element.done}
                    type="checkbox"
                />
                {element.description}
                <button id={element.id} onClick={handleDelete}>
                  delete
                </button>
              </li>
          ))}
        </ul>
        {taskList.length === 0 ? (
            <div>There is no task added</div>
        ) : isDone === taskList.length ? (
            <div>All tasks are finished</div>
        ) : (
            <div>There are {taskList.length - isDone} tasks left</div>
        )}
      </>
  );
}
