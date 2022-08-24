import Movie  from "../models/Movie.js";
//const tempResponse = [{nameMovie: "titanic"},{nameMovie: "armagedon"}];

const getAllMovies = async (req, res) => {
    try{
        const search = req.query.name;

        const movies = await Movie.find({$text: {$search: search}});
        
        return res.json({
            msg: 'peliculas encontradas',
            data: movies,
            busqueda: search,
        })
    }catch(error){
        return res.status(500).json({
            msg: 'Error al consultar peliculas',
            error,
        });
    }
}

export {getAllMovies};

