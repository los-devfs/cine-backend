import Room from '../models/Room.js'

const createRoom = async (req, res) => {
  try{
    const newRoom = await Room.create(req.body);
    return res.json({
      msg: 'Room creado',
      data: {
        room: newRoom,
      },
    });
  }catch (error){
    return res.status(500).json({
      msg: "Error al crear un Room",
      error,
    });
  }
};

export { createRoom };