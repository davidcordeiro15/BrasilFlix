

export default function Login({isLogged, handleLogin}) {
    
    
    //&& -> um if sem else, apenas faz uma função
    //Para executar um else, utilizar o ternario
    return(
        <>
        <div className="flex gap-4 items-center">
            {isLogged && <p>Olá usuário!</p>}

            <button onClick={handleLogin} className={`${isLogged ? "bg-gray-600":"bg-white"} rounded-3xl  text-gray-800 px-4 py-1 hover:text-white hover:bg-black`}>{isLogged ? "Logout": "Login"}</button>

        </div>

        </>
    )
}