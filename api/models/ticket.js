import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    code: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
        
    },
    projection:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projection',
    },

})
export default mongoose.model('Ticket', schema);