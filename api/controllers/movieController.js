import Movie from '../models/Movie.js';
import Review from '../models/Review.js';
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

const movieWithReview = async (req,res) => {
  try {
    // Obtenemos de la url el titulo de la pelicula
    const { id } = req.params;
    // Buscamos la pelicula 
    const movie = await Movie.findById(id)
    // Si no encuentra la peli
    if (!movie) {
        return res.status(404).json({
          msg: "Movie no encontrada",
          data: {},
        })
    }
    // Si la encuentra, buscamos sus reviews
    const reviews = await Review.find({idMovie: id})
    // Si no hay reviews
    if(!reviews){
      return res.status(404).json({
        msg: "No existen review para mostrar",
        data: {},
      })
    }
    // Si todo sale bien
    return res.json({
      msg: "Movie con sus reviews",
      data: {movie: movie.title, reviews: reviews}
    })
  } catch (error) {
    return res.status(500).json({
      msg: "error en la busqueda",
      error,
    });
  }

}


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

const updateMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: 'The movie has been updated',
      data: { movie: updateMovie },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'There was an error while trying to update the movie',
      data: error,
    });
  }
};

const deleteMovieById = async (req, res) => {
  try{
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    return res.json({
      msg: 'The movie was deleted',
      data: { movie },
    });
  }catch (error){
    return res.status(500).json({
      msg: 'Error while trying to delete the movie',
      error,
    });
  }
};

export { getAllMovies, createMovie, updateMovieById, deleteMovieById, movieWithReview };

