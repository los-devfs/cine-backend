import Client from "../models/User.js";

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await Client.findByIdAndUpdate(id, req.body, { new: true });
        return res.json({
        msg: "Update User",
        data: { user: updateUser },
        });
    } catch (error) {
        return res.json({
        msg: "Error al actualizar usuario",
        data: error,
        });
    }
};

export { updateUserById }


