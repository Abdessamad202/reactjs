export default function Jwix(){
  const data = ["good person","fan of jojo","good gamer"]
  return <>
  <ul>
    {data.map((element,index)=> <li key={index}>jwix is {element}</li>)}
  </ul>
  </>
}