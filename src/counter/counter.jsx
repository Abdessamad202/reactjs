import { Component , useState } from "react"

export default function Counter({initialValue,step}) {

  const [count, setCount] = useState(initialValue);
  return <div className="">
    <span>
      il y a {count} secondes
      <button type="button" onClick={()=>{
        setCount(prevState=>{
          return prevState + step
        })
      }}>incriment !</button>
      <button type="button" onClick={()=>{
        setCount(0)
      }}>reset !</button>
      <button type="button" onClick={()=>{
        setCount(prevState=>{
          return prevState - step
        })
      }}>decriment !</button>
    </span>
  </div>
}