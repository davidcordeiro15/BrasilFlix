import { useEffect, useState } from "react";
import Carroussel from "../components/Carrousel";



export default function Home(){
    
    const [moviesPop, setMoviesPop] = useState([])
    const [seriesRated, setSeriesRated] = useState([])
    const [moviesTop, setMoviesTop] = useState([])
    const [moviesNow, setMoviesNow] = useState([])
    const apiAdressStart = "https://api.themoviedb.org/3/"
    const apiAdressEnd = "?api_key=a6ef6052118503f3b99607d5a2f10ad1&language=pt-br"

    useEffect(() => {
        fetch(apiAdressStart + 'movie/popular'+ apiAdressEnd)
        .then(data => data.json())
        .then(res => setMoviesPop(res.results))
        .catch(error => console.log(error))
        .finally()
    }, [])
    useEffect(() => {
        fetch(apiAdressStart + 'tv/top_rated'+ apiAdressEnd)
        .then(data => data.json())
        .then(res => setSeriesRated(res.results))
        .catch(error => console.log(error))
        .finally()
    }, [])
        useEffect(() => {
        fetch(apiAdressStart + 'movie/upcoming'+ apiAdressEnd)
        .then(data => data.json())
        .then(res => setMoviesTop(res.results))
        .catch(error => console.log(error))
        .finally()
    }, [])
    useEffect(() => {
        fetch(apiAdressStart + 'movie/now_playing'+ apiAdressEnd)
        .then(data => data.json())
        .then(res => setMoviesNow(res.results))
        .catch(error => console.log(error))
        .finally()
    }, [])

                                    
    return(
        <>
            <div>
                <h1>Os queridinhos do momento: </h1>
                <Carroussel movies={moviesPop}></Carroussel>
            </div>
            <div>
                <h1>As series com melhor avaliação: </h1>
                <Carroussel movies={seriesRated}></Carroussel>
            </div>
            <div>
                <h1>Filmes recém lançados: </h1>
                <Carroussel movies={moviesTop}></Carroussel>
            </div>
            <div>
                <h1>Filmes em cartaz: </h1>
                <Carroussel movies={moviesNow}></Carroussel>
            </div>


            
        </>
    )
}
