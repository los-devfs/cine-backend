import Projection from "../models/Projection.js";

const deleteProjectionById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProjection = await Projection.findByIdAndDelete(id);
      return res.json({
        msg: 'Deleted projection',
        data: { projection: deleteProjection }
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error when deleting the projection by Id',
        data: error,
      });
    }
  };