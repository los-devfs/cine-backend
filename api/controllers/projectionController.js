import Projection from '../models/Projection';

const createProjection = async (req, res) => {
    try {
        const newProjection = await Projection.create(req.body);
        return res.json({
            msg:'Función creada',
            projection: newProjection,  
        })
    } catch (error){
        return res.status(500).json({
            msg: 'Error al crear función',
            error,
        })
    }
}
const getAllProjections = async (req, res) => {
    try {
        const projections = await Projection.find();
        return res.json({
            msg: 'Funciones encontradas',
            data: {
                projection: projections,
            }
        })
    } catch (error){
        return res.json({
            msg: 'Error al buscar funciones',
            error,
        })
    }
}

const getProjectionById = async (req, res) => {
    try {
        const { id } = req.params;
        const projection = await Projection.findById(id);
        if(!projection){
            return res.status(404).json({
                msg: 'No existe la función'
            });
        }
        return res.json({
            msg: 'Función encontrada',
            data: {
                book,
            },
        });
    } catch (error){
        return res.status(500).json({
            msg: 'Error al buscar función',
            error,
        })
    }
}
const updateProjectionById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateProjection = await Projection.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: 'Función actualizada',
            data: {projection: updateProjection},
        })
    } catch (error){
        return res.status(500).json({
            msg: 'Error al actualizar funciones',
            error,
        })
    }
}
const deleteProjectionById = async (req, res) => {
    try {
        const { id } = req.params;
        await Projection.findByIdAndDelete(id);
        return res.json({
            msg: 'Función eliminada',
            data
        })
    } catch (error){
        return res.status(500).json({
            msg: 'Error al borrar función',
            error,
        })
    }
};

export {createProjection, getAllProjections, getProjectionById, updateProjectionById, deleteProjectionById}