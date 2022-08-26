import joi, { number } from 'joi';

const updateReviewSchema = joi.object({
  review: {
    title: joi.string(),
    body: joi.string(),
  },
  rate: joi.number(),
  idUser: joi.string(),
  idMovie: joi.string()
});

export default async (req, res, next) => {
  try {
    await updateReviewSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation updateReview Error',
      error,
    })
  }
}