import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Carroussel({ movies}) {
    const [cursor, setCursor] = useState(0);
    

    const prev = () => {
        setCursor((cursor) => (cursor === 0 ? movies.length - 1 : cursor - 1));
    };


    const next = () => {
        setCursor((cursor) => (cursor === movies.length - 1 ? 0 : cursor + 1));
    };


    const goToSlide = (index) => {
        setCursor(index);
    };

    return (
        <>
            <div className="overflow-hidden relative w-full h-[500px] flex items-center justify-center">
              
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{
                        transform: `translateX(-${cursor * 100}%)`
                    }}
                >
                    {
                        movies.map((movie) => (
                            
                            <div key={movie.id} className="w-full flex-shrink-0 flex justify-center items-center">
                                <div className="flex-col">
                                <h1 className="text-white text-center justify-center text-3xl mb-2">{movie.title}{movie.name}</h1>
                               
                                <Link to={`/filmes/${movie.id}`} ><img
                                    className="max-w-full max-h-full object-contain "
                                    src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                                    alt={"imagem do filme: " + movie.title}
                                    /></Link>
                                
                                <p>{movie.id}</p>
                               
                                </div>
                            </div>
                        ))
                    }
                </div>

            
                <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full shadow bg-white bg-opacity-60 text-gray-800 hover:bg-opacity-100 text-xl"
                        style={{ fontSize: "24px" }} 
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={next}
                        className="p-3 rounded-full shadow bg-white bg-opacity-60 text-gray-800 hover:bg-opacity-100 text-xl"
                        style={{ fontSize: "24px" }} 
                    >
                        {">"}
                    </button>
                </div>

                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {
                        movies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${
                                    cursor === index ? 'bg-white' : 'bg-gray-400'
                                }`}
                            ></button>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Carroussel;
