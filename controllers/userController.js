import Client from "../models/Client.js";

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
        return res.json({
        msg: "Cliente actualizado",
        data: { client: updateClient },
        });
    } catch (error) {
        return res.json({
        msg: "Error al actualizar cliente",
        data: error,
        });
    }
};

export { updateUserById }


