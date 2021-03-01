import React from "react";

const SyntaticSugar = props => {
  const { name, mail, insta } = props;
  return (
    <div>
      <div>
        Hola a todos mi nombre es {name} mi correo es {mail} y puedes encontrarme en instagram como {insta}
      </div>{" "}
    </div>
  );
};
export default SyntaticSugar;