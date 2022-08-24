import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
     address: {
        type: String,
        required: true,
        unique: true,
    },
    roomNumber : {
        type: Number, 
        required: true,
        unique: true,
        min: 1,
    },
    seat: {
        type: Number,
        required: true,
        min: 1,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    }
})

export default mongoose.model('Room', roomSchema) 
