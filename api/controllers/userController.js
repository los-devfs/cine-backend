import User from "../models/User.js";
import config from "../config/index.js";

const sendEmailVerificateUser = async (User) =>{

    const testAccount = await nodemailer.createTestAccount();

    const testTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
        user: testAccount.user,
        pass: testAccount.pass,
        },
    });
  
    const transporter = nodemailer.createTransport({
        host:config.email.host,
        port: config.email.port,
        secure: false, 
        auth: {
            user: config.email.auth.user,
            pass: config.email.auth.pass,
        },
    });  
  
    let info = await transporter.sendMail({
      from: config.email.from, // De
      to: User.email, //Para
      subject: config.email.subject, //Asunto    
      html: `>Hola ${User.name},<br/>Este es un correo de verificación, de clic en el siguiente enlace para verificar su cuenta: <a href="#" tarjet="_blank">LINK</a></b>`,//Mensaje
    });

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

export { updateUserById }


