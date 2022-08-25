import joi from 'joi';

const createGenreSchema = joi.object({
  name: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createGenreSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'There was an error while validating the requested genre',
      error,
    });
  }
};