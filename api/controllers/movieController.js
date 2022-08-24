import Movie  from "../models/Movie.js";
//const tempResponse = [{nameMovie: "titanic"},{nameMovie: "armagedon"}];

const getAllMovies = async (_, res) => {
    try{
        const movies = await Movie.find();
        return res.json({
            msg: 'peliculas encontradas',
            data: movies,
        })
    }catch(error){
        return res.status(500).json({
            msg: 'Error al consultar peliculas',
            error,
        });
    }
}

export {getAllMovies};

