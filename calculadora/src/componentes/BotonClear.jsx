import React from "react";
import "../hojas-de-estilo/BotonClear.css"

function BotonClear(props){

  return(
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );

}

export default BotonClear;