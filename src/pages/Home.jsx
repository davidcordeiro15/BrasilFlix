import CardContainer from "./CardContainer"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"
export default function Home(){
    console.log(movies)
    return(
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    movies
                    .filter(filme => (filme.ano_lancamento<2000))
                    .map(filmes => (
                        <MovieCard key={filmes.id} {...filmes}></MovieCard>
                        
                    ))
                }
            </CardContainer>
            <CardContainer titulo="Filmes mais avaliados">
                {
                    movies
                    .filter(filme => (filme.avaliacao > 9))
                    .map(filmes => (
                        <MovieCard key={filmes.id} {...filmes}></MovieCard>
                        
                    ))
                }
            </CardContainer>
        </>
    )
}
