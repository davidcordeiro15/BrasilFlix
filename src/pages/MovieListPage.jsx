import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"
import { Link } from "react-router-dom";
export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    const apiAdressStart = "https://api.themoviedb.org/3/"
    const apiAdressEnd = "?api_key=a6ef6052118503f3b99607d5a2f10ad1&language=pt-br"

    //useEffect controla algo quue você quiser
    useEffect(() => {
        fetch(apiAdressStart + 'movie/popular'+ apiAdressEnd)
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
        <div className="m-2 text-center">
            <h2 className="text-3xl">Veja o catálogo de filmes</h2>
            <input type="text" className="m-5 text-black w-2/6" id="search" value={search} onChange={handleSearch}/>
        </div>
        <div className="flex flex-wrap justify-between gap-5 ">
        { //.map com parenteses retorna a informação sem precisar escrever um return, se tivesse {} precisaria
                filmes.map((filme) => (
                    <div className="w-1/6 hover:border-2 hover:rounded-xl hover:scale-110 ">
                        <h1 className="text-center">{filme.title}</h1>
                        <Link to={`/filmes/${filme.id}`} ><img className="" src={"https://image.tmdb.org/t/p/w500"+filme.poster_path} alt="" /></Link>
                        
                    </div>
                
                ))
            }
        </div>
        </>
        
    )
}
