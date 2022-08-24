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

export { createMovie };
