import React from "react"


export default function Propiedades(props) {
  return (
    <div>
      <h2>
        {props.contenido}
      </h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.name + `-----` + props.object.email}</li>
        <li>{props.elementReact}</li>
        <li>{props.array.map(props.function).join(" ")}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  contenido: "This is the content of the component",
}

Propiedades.propTypes={
  
}