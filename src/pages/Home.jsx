import { useEffect, useState } from "react";
import Carroussel from "../components/Carrousel";



export default function Home(){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a6ef6052118503f3b99607d5a2f10ad1&language=pt-br')
        .then(data => data.json())
        .then(res => setMovies(res.results))
        .catch(error => console.log(error))
        .finally()
    }, [])

    return(
        <>
            <div>
                <h1>Os queridinhos do momento: </h1>
                <Carroussel movies={movies} ></Carroussel>
            </div>


            
        </>
    )
}
