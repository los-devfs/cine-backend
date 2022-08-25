import Movie from "../models/Movie.js";

const createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    return res.json({
      msg: "Movie creado",
      Movie: newMovie,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error al crear el Movie",
      error,
    });
  }
};

const movieWithReview = async (req,res) => {
  try {
    // Obtenemos de la url el titulo de la pelicula
    const { titleMovie } = req.params;
    // Buscamos la pelicula 
    const movie = await Movie.findOne({title:titleMovie})
    // Si no encuentra la peli
    if (!movie) {
        return res.status(204).json({
          msg: "Movie no encontrada",
          data: {},
        })
    }
    // Si la encuentra, la enlazamos con sus reviews
    const reviews = await movie.populate('review');
    // Si no hay reviews
    if(!movie.review){
      return res.status(204).json({
        msg: "No existen review para mostrar",
        data: {},
      })
    }
    // Si todo sale bien
    return res.json({
      msg: "Movie con sus reviews",
      data: {reviews}
    })
  } catch (error) {
    return res.status(500).json({
      msg: "error en la busqueda",
      error,
    });
  }

}

export { createMovie, movieWithReview };
