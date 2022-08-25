import User from "../models/User.js";

const disableUserbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user.isActive) {
      const nUser = await User.findByIdAndUpdate(id, { isActive: false });

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

export { disableUserbyId };