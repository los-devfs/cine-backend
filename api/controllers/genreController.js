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

export  { createGenre };