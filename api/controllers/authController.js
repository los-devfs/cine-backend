import bcrypt from 'bcrypt'
import User from '../models/User.js';
const register = async(req, res) => {
    try {
        // Encriptamos el password enviado desde el body
        const encryptedPass = await bcrypt.hash(req.body.password, 4);
        req.body.password = encryptedPass;
        const user = await User.create(req.body);
        //Ocultamos la encriptacion
        user.password = undefined;
        return res.json({
            msg: 'Usuario creado',
            data: { user}
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al registrar usuario',
            error
        })
    }
}
export {register}