import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  review: {
    type: {
      title: {
        type: String,
      },
      body: {
        type: String,
      },
    },
    required: true,
  },
  rate: {
    type: Number,
    enums: [1, 2, 3, 4, 5],
    requires: true,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  idMovie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
});

export default mongoose.model('Review', schema);
