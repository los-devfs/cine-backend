import Projection from '../models/Projection';

const createProjection = async (req, res) => {
    try {

    } catch (error){
        return res.json({
            msg: 'Error al buscar libros',
            error,
        })
    }
}
const getAllProjections = async (req, res) => {
    try {
        const projections = await Projection.find();
        return res.json({
            msg: 'Libros encontrados',
            data: {
                projection: projections,
            }
        })
    } catch (error){
        return res.json({
            msg: 'Error al buscar libros',
            error,
        })
    }
}

const getProjectionById = async (req, res) => {
    try {

    } catch (error){
        return res.json({
            msg: 'Error al buscar libros',
            error,
        })
    }
}
const updateProjectionById = async (req, res) => {
    try {

    } catch (error){
        return res.json({
            msg: 'Error al buscar libros',
            error,
        })
    }
}
const deleteProjectionById = async (req, res) => {
    try {

    } catch (error){
        return res.json({
            msg: 'Error al buscar libros',
            error,
        })
    }
}

export {createProjection, getAllProjections, getProjectionById, updateProjectionById, deleteProjectionById}