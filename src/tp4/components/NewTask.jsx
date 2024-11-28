import { useRef } from "react"

export default function NewTask({sendToParent}) {
  const inputTaskRef = useRef()
  const handleClick = (e) => {
    sendToParent(inputTaskRef.current.value)
  }
  return (
    <>
      <input type="text" name="" ref={inputTaskRef} id="" />
      <button type="button" onClick={handleClick}>Add task</button>
    </>
  )
}