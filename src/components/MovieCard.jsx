import { useState } from "react"
import { Link } from "react-router-dom"
export default function MovieCard({id,titulo,imagem_destaque}) {
    const [classCardFilm, setClassCardFilm] = useState("invisible")
    const hoverCardFilm = () => {
        classCardFilm === "invisible" ? setClassCardFilm("visible") : setClassCardFilm("invisible")
    }

    return(
        <>
        <div>
            <Link to={`/filmes/${id}`}> <img className={`w-20 h-30  delay-100` }  onMouseEnter={hoverCardFilm} onMouseLeave={hoverCardFilm} src={imagem_destaque} alt="" /></Link>
            <div className={classCardFilm}>
                <h2>{titulo}</h2>
            </div>
        </div>
        </>
    )

}