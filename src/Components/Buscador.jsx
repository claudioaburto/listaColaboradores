import React from "react";
import { useState } from "react";

const Buscador = ({ handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="sectionBuscar">
      <input
        type="text"
        placeholder="Busca un colaborador"
        name="busqueda"
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
