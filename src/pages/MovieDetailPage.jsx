import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function MovieDetailPage({ movie }) {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const apiAdressStart = "https://api.themoviedb.org/3/";
  const apiAdressEnd = "?api_key=a6ef6052118503f3b99607d5a2f10ad1&language=pt-br";

  useEffect(() => {
    fetch(apiAdressStart + "movie/" + id + apiAdressEnd)
      .then((data) => data.json())
      .then((res) => setMovieDetail(res)) 
      .catch((error) => console.log(error));
  }, [id]); 

 

  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path}
        alt={"movie_poster: " + movieDetail.title}
      />
      <h1>{movieDetail.title}</h1>
      <p>{movieDetail.overview}</p>
    </div>
  );
}
