import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <div className="">
        <h1 className="text-3xl p-20 pt-10 pb-10">Filmes</h1>
        <div className="flex justify-between gap-16 flex-wrap p-20 pt-0">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme text-cor1 rounded-2xl h-[300px] w-[150px] flex flex-col justify-around">
                            <h1 className="text-wrap text-center pb-1" key={filmes}>{filme.title}</h1>
                            <img className="w-40" src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                            <Link to={`${filme.id}`} className="flex justify-center bg-cor1 text-white rounded p-5 pt-1 pb-1">Saiba Mais</Link>
                        </div>
                    )
                )
            }
        </div>
        </div>
        <div className="bg-cor1 flex-col text-center">
            <h1 className="text-5xl font-semibold text-white">DUTRINHAFLIX</h1>
            <p className="text-xs text-white">2024, Todos os direitos reservador</p>
        </div>
        </>
    );
}

export default Filmes;