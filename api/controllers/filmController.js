import Film from "../../models/Film.js";

const createFilm = async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    return res.json({
      msg: "Film creado",
      Film: newFilm,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error al crear el Film",
      error,
    });
  }
};

const getAllFilms = async (req, res) => {
  try {
    const Films = await Film.find({});
    return res.json({
      msg: "Films encontrados",
      data: Films,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Films",
      error,
    });
  }
};

const getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const Film = await Film.findById(id);
    return res.json({
      msg: "Film encontrado",
      data: Film,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Film por id",
      error,
    });
  }
};
const updateFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const Film = await Film.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Film actualizado",
      data: Film,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar el Film por id",
      error,
    });
  }
};

const deleteFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const Film = await Film.findByIdAndDelete(id);
    if (!Film) {
      return res.status(404).json({
        msg: "No existe el Film",
      });
    }
    return res.json({
      msg: "Film borrado",
      data: Film,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar el Film por id",
      error,
    });
  }
};

export { getAllFilms, createFilm, getFilmById, updateFilmById, deleteFilmById };
