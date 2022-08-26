import jwt from 'jwt-simple';
import config from '../config/index.js';
import User from '../models/User.js';

const isLogged =  async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json({
                msg: 'Cabecera Authorization faltante',
            });
        }

        const payload = jwt.decode(token, config.jwt.secret);

        const user = await User.findById(payload.userId);

        if(!user){
            return res.status(401).json({
                msg: 'Usuario invalido',
            })
        }
        
        const expirationDate = new date(payload.expirationDate);
        if(expirationDate.getTime() < new Date().getTime()){
            return res.status(400).json({
                msg: "El token expiro",
            });
        }
        
        next()
    } catch (error) {
        return res.status(401).json({
            msg: 'Token invalido',
        })
    }
}
    
export default isLogged;