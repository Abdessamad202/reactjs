import { useState } from 'react'
export default function FruitList(){
  const [fruit, setFruit] = useState("");
  const [fruitList, setfruitList] = useState([]);
  const handleChange = (e) => {
    setFruit(e.target.value)
  }
  const handleList = () => {
    setfruitList((prevFruitList) => [...prevFruitList,fruit])
    setFruit("")
  }
  return <>
  <input type="text" name="" value={fruit} onChange={handleChange}  id="" /><button type="button" onClick={handleList}>add fruit</button>
  <h1>Fruits :</h1>
  {fruitList.length === 0 ? <div>there is no fruit</div> : <ui>{fruitList.map((element, index) => <li key={index}>{element}</li>)}</ui> }
</>
}