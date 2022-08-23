import mongoose from 'mongoose';


const schema = new mongoose.Schema({
  review: {
    title: {
      type: String,
    },
    body: {
      type: String
    },
    required: true
  },
  rate: {
    type: Number,
    requires: true,
  },
  idUser: {
    type: Number,
    required: true
  },
  idMovie: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Review', schema);