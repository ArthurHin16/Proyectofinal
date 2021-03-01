import React from 'react';
import logo from './yo.jpg';
import "./Card.css";
import SyntaticSugar from "./SyntaticSugar.js";

let info = {name:"Carlos Manuel Gonzalez Vallejo", mail: "A0127600@itesm.mx",insta:"CharlesGoValle"};


function Card({name:nombre, mail:correo, insta:red})
{
    return (
        <div  class="rectangulo">
            <h2 id="titulo"> Tecnologico de Monterrey </h2>
            <img src={logo} className="Card-logo" alt="logo" />
            <div id="informacion">
                <div> {`${nombre}`} </div>
                <div> {`${correo}`} </div>
                <div> {`Instagram: ${red}`} </div>
                <div>
                  <SyntaticSugar {...info}/>
                </div>
            </div>
        </div>

  );
}
export default Card;