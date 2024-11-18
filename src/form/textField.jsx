// export default function TextField({inputName,inputLabel,children}){
//   return (
//     <>
//     <label htmlFor="">{inputLabel}</label>
//     <input type="text" name={inputName} id=""  />
//     <div className="">{children}</div>
//     </>
//   )
// }
import { Component } from "react";
export default class TextField extends Component{
  render() {
    return (
      <>
      <label htmlFor="">{this.props.inputLabel}</label>
      <input type="text" name={this.props.inputName} id=""  />
      <div className="">{this.props.children}</div>

      </>
    )
  }

}
