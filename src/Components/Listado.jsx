import Table from "react-bootstrap/Table";

const Listado = ({ ListaColaboradores, terminoBusqueda }) => {
  const filtradoColaboradores = terminoBusqueda
    ? ListaColaboradores.filter((colaborador) => {
        const searchTerm = terminoBusqueda.toLowerCase();
        return Object.values(colaborador).some((value) =>
          value.toString().toLowerCase().includes(searchTerm)
        );
      })
    : ListaColaboradores;

  return (
    <div className="w-75 pt-5">
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {filtradoColaboradores.map((colaborador) => {
            return (
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
