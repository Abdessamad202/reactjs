export default function HelloWorld({lastname,age}){
  // console.log(props);
  // if(age>30){
  //   return (<h1>hello {lastname} | adult</h1>);
  // }else{
  //   return (<h1>hello {lastname} | mineur</h1>);
  // }
  return <h1>hello {lastname} | {age >=30 ?  "adult" : "mineur"}</h1>
};
// import {Component} from "react";
// export default class HelloWorld extends Component{
//   render(){
//     return <h1>Hello World</h1>
//   }
// }
// import { Component } from "react";
// export default class HelloWorld extends Component{
//   render(){
//     return <h1>hello {this.props.lastname}</h1>
//   }
// }