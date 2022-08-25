import Movie from '../models/Movie.js';
//const tempResponse = [{nameMovie: "titanic"},{nameMovie: "armagedon"}];

const getAllMovies = async (req, res) => {
  try {
    const search = req.query.name;

    const movies = await Movie.find({ $text: { $search: search } });

    return res.json({
      msg: 'peliculas encontradas',
      data: movies,
      busqueda: search,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al consultar peliculas',
      error,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    return res.json({
      msg: 'Movie creado',
      Movie: newMovie,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error al crear el Movie',
      error,
    });
  }
};

export { getAllMovies, createMovie };
