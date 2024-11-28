import { useRef, useState } from "react";
import Ctask from "./Ctask";

export default function ListTaches({tasks}) {
  // const [isDone, setIsDone] = useState();
  const isDoneCheckRef = useRef()


  return (
    <>
    {tasks.length >0 ? <ul>{tasks.map((el,index)=><Ctask key={index} task={el} />)}</ul>:<div>there is no task</div>}
    </>
  )
};
