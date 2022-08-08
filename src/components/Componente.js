// import React, { Component } from "react";

/**
 *componente desde una clase => se le pasa this.props.msg 
  para cambiar dinamicamente el contenido
*/

// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>
//   }
// }
//! componente desde una clase


//? componente desde una funcion

// function Componente(props) {
//   return <h2>{props.msg}</h2>
// }
//? componente desde una funcion

const Componente = props => <h2>{props.msg}</h2>



export default Componente