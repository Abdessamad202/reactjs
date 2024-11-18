// export default function Fruit({ fruits }) {
//   return <>
//     <h1>Fruit : </h1>
//     <ul>
//       {fruits.map(element => (
//         <li>{element}</li>
//       )
//       )}
//     </ul>
//   </>
// }
import {Component} from 'react'
export default class name extends Component {
  name() {
    return this.props.fruits.map(element =>(<li>{element}</li>));
  }
  render(){
    return <>
      <h1 className="red">Fruit : </h1>
      <ul>
      {this.name()}
      </ul>
</>
  }
}
