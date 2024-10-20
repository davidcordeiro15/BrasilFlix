import { NavLink } from "react-router-dom";
import Login from "../Login";

import { useState } from "react";
export default function Header(){
    const classList = "hover:border-b-2 delay-75"; 
    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(!isLogged)
    }
    if (isLogged == true){

    }
    return(
        <>
            <header className=" p-5 flex justify-between font-bold">
                <div>
                    <h1 className="text-white text-4xl">BrasilFlix</h1>
                </div>
                <nav>
                    <ul className="flex gap-5 text-white ">
                        <li className={classList}><NavLink to="/">Home</NavLink></li>
                        <li className={classList}><NavLink to="/filmes">Filmes</NavLink></li>
                        <li className={classList}><NavLink to="/generos">Gêneros</NavLink></li> 
                        {isLogged && <li className={classList}><NavLink to="/settings">Configurações</NavLink></li>}
                        
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}
//utiza o NavLink para identificar qualpágina está ativa