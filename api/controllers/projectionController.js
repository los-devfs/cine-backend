import Projection from "../models/Projection.js";

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

  export { deleteProjectionById };
  