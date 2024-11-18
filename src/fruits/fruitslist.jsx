import { useState } from "react";
export default function FruitList() {
  const [fruit,setFruit] = useState("");
  const [fruitList,setFruitList] = useState([]);
  const handleInputFruitField = () => {
    setFruit(document.getElementById("fruit").value);
    // console.log(fruit);

  };
  const handleFruit = () => {
      setFruitList((prevFruitList)=>[...prevFruitList,fruit]);
      console.log(fruitList);

      setFruit("")
    }
  return <>
    <h1>Fruit : </h1>
    <form>
      <input type="text" onChange={handleInputFruitField} id="fruit" />
      <button type="button" onClick={handleFruit}>ajouter</button>
    </form>
    <ul>
      {fruitList.map((element,index) => (
        <li key={index}>{element}</li>
      )
      )}
    </ul>
  </>
}
// import { useState } from "react";

// export default function Fruit() {
//   const [fruits, setFruits] = useState([]); // Initialize as an array
//   const [inputValue, setInputValue] = useState(""); // Track the input value

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value); // Update input value state
//   };

//   const handleAddFruit = () => {
//     if (inputValue.trim()) {
//       setFruits((prevFruits) => [...prevFruits, inputValue.trim()]); // Append new fruit
//       setInputValue(""); // Clear the input field
//     }
//   };

//   return (
//     <>
//       <h1>Fruits:</h1>
//       <form>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           id="fruit"
//         />
//         <button type="button" onClick={handleAddFruit}>
//           Ajouter
//         </button>
//       </form>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
