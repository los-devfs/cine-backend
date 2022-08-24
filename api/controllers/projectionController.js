import Projection from '../models/Projection.js';

const updateProjectionById = async (req, res) => {
  try {
    const projection = await Projection.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    return res.json({
      msg: 'Proyección actualizada',
      data: { projection },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar Proyección',
      error,
    })
  }
}

export { updateProjectionById };