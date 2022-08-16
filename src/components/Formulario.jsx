import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const { datosBusqueda, busqueda, buscarClima } = useClima();
  const [alerta, setAlerta] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    buscarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p className="alerta">{alerta}</p>}

      <form action="" onSubmit={handlerSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={busqueda.ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select
            name="pais"
            id="pais"
            onChange={datosBusqueda}
            value={busqueda.pais}
          >
            <option value="">- Seleccione un pais -</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};
export default Formulario;
