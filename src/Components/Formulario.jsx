import { useState } from "react";

const Formulario = ({
  setCollaborators,
  Collaborators,
  setAlertMessage,
  setColorMessage,
  alertMessage,
  colorMessage,
}) => {
  const [NewCollaborator, setNewCollaborator] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const correoValido = (email) => {
    const regex = /^[^@]+@[^.]+\..+$/;
    return regex.test(email);
  };
  const validarNombre = (nombre) => {
    const regexName = /^[A-Za-z\s-]+$/;
    return regexName.test(nombre);
  };
  const AddColaborador = (e) => {
    e.preventDefault();
    if (
      NewCollaborator.nombre === "" ||
      NewCollaborator.correo === "" ||
      NewCollaborator.edad === "" ||
      NewCollaborator.cargo === "" ||
      NewCollaborator.telefono === ""
    ) {
      setAlertMessage("Llene todos los campos");
      setColorMessage("true");
    } else if (validarNombre(NewCollaborator.nombre) !== true) {
      setAlertMessage("Ingrese nombre valido");
      setColorMessage("true");
    } else if (correoValido(NewCollaborator.correo) !== true) {
      setAlertMessage("El correo no es valido.");
      setColorMessage("true");
    } else {
      NewCollaborator.id = Collaborators.length + 1;
      setCollaborators([...Collaborators, NewCollaborator]);
      setNewCollaborator({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setAlertMessage("Colaborador agregado!");
      setColorMessage("false");
    }
  };
  const Addinput = (x) => {
    setNewCollaborator({ ...NewCollaborator, [x.target.name]: x.target.value });
  };
  return (
    <div className="sectionForm">
      <h3>Agregar colaborador</h3>
      <form className="form p-2" onSubmit={AddColaborador}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="form-control"
          onChange={Addinput}
          value={NewCollaborator.nombre}
        />
        <input
          type="email"
          placeholder="Email"
          name="correo"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.correo}
        />
        <input
          type="number"
          placeholder="Edad"
          name="edad"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.edad}
        />
        <input
          type="text"
          placeholder="Cargo"
          name="cargo"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.cargo}
        />
        <input
          type="text"
          placeholder="Telefono"
          name="telefono"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.telefono}
        />
        <button type="submit" className="btn btn-info mt-2 w-100">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
