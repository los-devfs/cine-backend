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

  const deleteGenreById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteGenre = await Genre.findByIdAndUpdate( id, { deleted: true} );
      return res.status(200).json({
        msg: 'Genre deleted',
        data: { genre: deleteGenre }
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error when deleting the genre by Id',
        data: error,
      });
    }
  };


const updateGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByIdAndUpdate(id, req.body, {new: true});

    return res.json({
      msg: "The genre was updated",
      data: { genre },
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar genero",
      error,
    })
  }
}

export  { createGenre, deleteGenreById, updateGenreById };
