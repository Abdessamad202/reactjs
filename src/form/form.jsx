import { useState } from "react";
export default function Form() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const handleNameinputChange = () =>{
    const name = document.getElementById("name").value
    setName(name)
  }
  const handleAgeinputChange = () =>{
    const age = document.getElementById("age").value
    setAge(age)
  }
  const handleSubmit = (e)=>{
    // e.preventDefault()
    handleNameinputChange()
    handleAgeinputChange()
    console.log({
      name,age

    }
    );

  }
  return <div className="">
    <form>
      <input type="text" id="name" onChange={handleNameinputChange} placeholder="text" />
      <input type="number" id="age" onChange={handleAgeinputChange} placeholder="number" />
      <button type="button" onClick={handleSubmit}>submit</button>
    </form>
  </div>
}