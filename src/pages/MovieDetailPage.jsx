import { useParams } from "react-router-dom"
import movies from "../data/movies.json"
export default function MovieDetailPage(){
    const {id} = useParams(); 
    return(
        <>      
        <h1>{movies[parseInt(id-1)].titulo}</h1>
        <img src={movies[parseInt(id-1)].imagem_destaque} alt="img_movie" />
        <p>{movies[parseInt(id-1)].descricao}</p>
        </>
    )
}