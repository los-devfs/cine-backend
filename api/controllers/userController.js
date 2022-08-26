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


const changePassword = async(req,res)=>{
  try {
    //buscar usuario por id
    // comprobar password old
    // si no coincide, error
    //si coincide, encriptar nueva passwoord y guardar

    const usuario = await User.findById(req.params.id)
    const passCorrect = await bcrypt.compare(req.body.oldPassword, usuario.password );
    if(!passCorrect){
      res.status(401).json({msg:'Contraseña no coincide'})
    }
    else {
      const encryptedPass = await bcrypt.hash(req.body.newPassword, 4);
      
      usuario.password = encryptedPass
      await usuario.save() 
      res.status(200).json({msg:'Contraseña guardada'})

    }    
  } catch (error) {
    return res.json({
      msg:"Error al cambiar contraseña",
      data: error
    })
  }
}

export { updateUserById, disableUserbyId, changePassword };

