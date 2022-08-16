import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {

      const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });

    const [resultado, setResultado] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    }

    const buscarClima = async (datos) => {
        
        // primero vamos a consultar las coordenasdas de la ciudad con el primer axios o fetch 
        // despues con la lat y log vamos a consultar el clima con el segundo axios o fetch
       // setError(false);
        setResultado({});
        setLoading(true);
        setError(false);
        try {

        const { ciudad, pais } = datos;
        const appId = import.meta.env.VITE_API_KEY
        //const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
       
        const {data} = await axios.get(url);
        
        const {lat, lon} = data[0]; // destructuring de latidud y longitud 
        
        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
         
        // como data ya esta declarada arriba podemos renombrarla a {data}. El axios siempre devuelve un objeto con la data en la propiedad data
        const {data:clima} = await axios.get(urlClima);
         
        setResultado(clima);
       // setLoading(false);

        } catch (error) {
            console.log(error)
            setError(true);
        }
        finally {
            setLoading(false);
        }

    }
   
   
    return (
        <ClimaContext.Provider value={{
            
            datosBusqueda,
            busqueda,
            buscarClima,
            resultado,
            loading, 
            error
            
            
        }}>
            {children}
        </ClimaContext.Provider>
    )

}

export {
    ClimaProvider
}

export default ClimaContext;