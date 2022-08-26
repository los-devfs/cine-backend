import Review from '../models/Review.js';

const updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: 'The review has been updated',
      data: { Review: updateReview },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'There was an error while trying to update the review',
      data: error,
    });
  }
};

export { updateReviewById };