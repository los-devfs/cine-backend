import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
    room_number : {
        type: Number, 
        required: true,
        unique: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    }
})

export default mongoose.model('Room', userSchema)