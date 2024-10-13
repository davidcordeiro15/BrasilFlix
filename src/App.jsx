import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
function App() {

  return (
    <>
    <div className="bg-black">
     <Header/>
     <Outlet></Outlet>
    </div>
     {/* Exibe o header e a lista de filmes disponível divididos por
     Antigos(antes dos anos 2000)
     Bem-avaliados(nota maior que 9)*/}
    </>
  )
}

export default App
