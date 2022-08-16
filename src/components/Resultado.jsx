import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El Clima de {resultado.name} es:</h2>
      <p>{parseInt(resultado.main.temp - kelvin)}°C</p>

      <div className="temp_min_max">
        <p>Max: {parseInt(resultado.main.temp_max - kelvin)}°C</p>
        <p>Min: {parseInt(resultado.main.temp_min - kelvin)}°C</p>
      </div>

      <div className="humedad">
        <p>Hum: {parseInt(resultado.main.humidity )}%</p>
        <p>Pres: {parseInt(resultado.main.pressure )}Pa</p>
      </div>
    </div>
  );
};
export default Resultado;
