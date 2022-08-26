import Genre from '../models/Genre.js';

const createGenre = async (req, res) => {
    try {
      const newGenre = await Genre.create(req.body);
      return res.json({
        msg: 'The requested genre was created',
        Genre: newGenre,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error while creating the requested genre',
        error,
      });
    }
  };

const updateGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByIdAndUpdate(id, req.body, {new: true});

    return res.json({
      msg: "Genero actualizado",
      data: { genre },
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar genero",
      error,
    })
  }
}

export  { createGenre, updateGenreById };