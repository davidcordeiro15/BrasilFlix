import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function GenreListPage(){

  const [generos, setGeneros] = useState([])
  const apiAdressStart = "https://api.themoviedb.org/3/"
  const apiAdressEnd = "?api_key=a6ef6052118503f3b99607d5a2f10ad1&language=pt-br"

    //useEffect controla algo quue você quiser
    useEffect(() => {
        fetch(apiAdressStart + 'genre/movie/list'+ apiAdressEnd)
        .then(data => data.json())  // A promessa foi comprida então (realize tal coisa) 
        .then(res => setGeneros(res.genres)) // "res" é o resultado da função .then logo irá armazenar os dados de "data" em um array
        .catch( error => console.log(error)) //irá tratar o erro assim como "try catch" do java
        .finally(() => console.log('Fim'))

    }, []) //O array mostra qual condição para o fetch funcionar novamente
    return(
        <>
        <h1>Gêneros: </h1>
        {
          generos.map((filme) => (
            <div>
              <Link><p>{filme.name}</p></Link>
            </div>
          ))
        } 
        </>
    )
}