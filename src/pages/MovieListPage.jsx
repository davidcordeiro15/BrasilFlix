import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"
export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    //useEffect controla algo quue você quiser
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then(data => data.json())  // A promessa foi comprida então (realize tal coisa) 
        .then(res => setFilmes(res.results)) // "res" é o resultado da função .then logo irá armazenar os dados de "data" em um array
        .catch( error => console.log(error)) //irá tratar o erro assim como "try catch" do java
        .finally(() => console.log('Fim'))

    }, []) //O array mostra qual condição para o fetch funcionar novamente

    const handleSearch = (event) => {
        setSearch(event.target.value) //Irá atualizar o componente de acordo com a digitação 
        //console.log(search)
    }
    //filtrando os filmes pelo nome
    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))
    //includes verifica se o titulo filme inclui alguma coisa
    return(
        <>
        <div className="m-2 ">

            <h2>Veja o catálogo de filmes</h2>
            <input type="text" className="text-black" id="search" value={search} onChange={handleSearch}/>
        </div>
        { //.map com parenteses retorna a informação sem precisar escrever um return, se tivesse {} precisaria
            filmes.map((filme) => (
                <div>
                    <h1>{filme.title}</h1>
                    <img src={"https://image.tmdb.org/t/p/w500"+filme.backdrop_path} alt="" />
                    <p>{filme.vote_average}</p>
                </div>
              
            ))
        }
        </>
        
    )
}
/*
const [count, setcount ] = useState(0) // o numero dentro é quanto começa
//O usestate atualiza todo o componente, defina bem a divisão do componente
//Todas as variaveis que devem ser atualizadas devem ter esse formator (nome da variavel, função da variavel)
//No caso acima um setar um numero
const [text, setText ] = useState("Clique aqui")  
const handleClick = () => (
    //o prev é um identificador padrao para o programa saber q será o estado anterior da variavel
    //no caso pegar o valor interior e somar
    setcount((prev) => prev +1),
    console.log(count) //só autualiza quando toda a função já estiver sido realizada 
    
);
const handleClickD = () => (
    setcount((prev) => prev -1)
)
const handleClickZ = () => (
    setcount(0)
)
const handleClickT = () => (
    setText(prev => prev === "Clique aqui" ? "Você clicou" : "Clique aqui")
    
)*/
/*
<div className="p-5 gap-5">
    <p>{count}</p>
    <button onClick={handleClick}>Aumentar</button>
    <button onClick={handleClickD}>Diminuir</button>
    <button onClick={handleClickZ}>Zerar</button>,
    <button onClick={handleClickT}>{text}</button>
</div>*/