import React, { useState, useEffect } from "react"; // Importando useState e useEffect do React
import { Link, useParams } from "react-router-dom";

export default function MovieDetailPage() {
    // biblioteca uiball para loaders

    const { id } = useParams();
    const [filme, setFilme] = useState(null);
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(data => {
                if (!data.ok) {
                    throw new Error('Erro ao buscar os detalhes do filme');
                }
                return data.json();
            })
            .then(res => {
                setFilme(res);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                console.log('Fim');
            });
    }, [id]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(data => {
                if (!data.ok) {
                    throw new Error('Erro ao buscar os detalhes do filme');
                }
                return data.json();
            })
            .then(res => {
                setVideo(res);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                console.log('Fim');
            });
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <>  <div className="m-5 max-h-screen">
            {filme && (
                <div className="">
                    <h1  className="text-3xl" >{filme.title}</h1>
                    <img className="w-1/6 mt-3 mb-3 " src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
                    <p className="w-4/6" >{filme.overview}</p>
                </div>
            )}
        </div>
        </>
    );
}