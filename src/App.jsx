import AppClimas from "./components/AppClimas"
import {ClimaProvider} from "./context/ClimaProvider"

function App() {
  
  return (
    <div className="App">
      <ClimaProvider>
        <header>
          <h1>Buscar de Climas</h1>
        </header>
      <AppClimas/>
      </ClimaProvider>
    </div>
  )
}

export default App
