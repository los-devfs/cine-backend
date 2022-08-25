import joi from "joi";

const createReviewSchema = joi.object({
  review: {
    title: joi.string().required(),
    body: joi.string().required(),
  },
  rate: joi.array().required(),
  idUser: joi.string().required(),
  idMovie: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createReviewSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación en el review",
      error,
    });
  }
};
