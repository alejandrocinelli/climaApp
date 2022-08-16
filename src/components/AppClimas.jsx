import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";

const AppClimas = () => {
  const { resultado,loading, error } = useClima();
   
  return (
    <>
    <main className="dos-columnas">
    <Formulario></Formulario>

    {loading ? <Spinner></Spinner> : 
    resultado?.name ? <Resultado/> : error ? <p className="errorP">Ciudad no encontrada complete bien los campos</p> 
    : <p className="busca"> Busca una ciudad</p>}  
       
    </main>
    </>
  )
}
export default AppClimas