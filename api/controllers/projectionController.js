import Projection from '../models/Projection.js';

const updateProjectionById = async (req, res) => {
  try {
    const { id } = req.params;
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

const deleteProjectionById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProjection = await Projection.findByIdAndUpdate( id, { deleted: true} );
      return res.status(200).json({
        msg: 'Projection deleted',
        data: { projection: deleteProjection }
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error when deleting the projection by Id',
        data: error,
      });
    }
  };
export { updateProjectionById, deleteProjectionById };
