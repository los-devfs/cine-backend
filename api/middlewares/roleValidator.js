/**
 * Crear un míddleware que le puedas pasar un arreglo de roles 
 * (ver modelo User) y dependiendo de los roles pasados como 
 * parámetros dejará o no pasar al usuario que mandó el token
 */
 
export default  async (...allRoles)=>{
    return (req,res,next)=>{
        if(!req || !req.roles ) 
        {
            return res.status(401).json(
                {
                    msg: 'Error de autenticacion',
                    error
                }
            )
        }

        const rolesArray=[...allRoles]
        const result = req.roles.map(
            role => {
                rolesArray.includes(role)
            }
        ).find(val => val===true)

        if (!result)
        {
            return res.status(401).json(
                {
                    msg: "El usuario no tiene los permisos suficientes",
                    error
                }
            )
        }
        next()
    }
}
