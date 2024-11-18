export default function Event(){
const handleClick = () => {
    // console.log(this);
  alert("BOYAAAH");
}
  return <div><button type="button" onClick={handleClick}>click</button></div>
}
// import { Component } from "react";

// export default class Event extends Component {
//   handleClick = () => {

//     alert("BOYAAAH");
//   }

//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.handleClick}>
//           click me !
//         </button>
//       </div>
//     );
//   }
// }
