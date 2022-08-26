import User from "../models/User.js";


const disableUserbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user.isActive) {
      const nUser = await User.findByIdAndUpdate(id, { isActive: false }, { new: true });

      return res.status(200).json({
        msg: "Este usuario se desactivo",
        data: nUser
      })
    } else {
      return res.status(403).json({
        msg: "Este usuario ya esta desactivado",
        data: user
      })
    }
  } catch (error) {
    return res.status(403).json({
      msg: "Tenemos un 33-12",
      error
    })
  }
}

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Update User",
      data: { user: updateUser }
    });
  } catch (error) {
    return res.json({
      msg: "Error al actualizar usuario",
      data: error
    });
  }
};

export { updateUserById, disableUserbyId };