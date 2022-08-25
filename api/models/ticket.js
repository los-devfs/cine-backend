import moongose from 'mongoose';

const schema = new moongose.schema({
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
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        
        
    },
    projection:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Projection',
    },

})
export default moongose.model('Ticket', schema);