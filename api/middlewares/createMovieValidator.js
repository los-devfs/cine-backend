import joi from "joi";

const genreSchema = joi.object().keys({
  name: joi
    .string()
    .valid(
      "action",
      "comedy",
      "drama",
      "horror",
      "romance",
      "thriller",
      "western"
    ),
});

const createMovieSchema = joi.object({
  title: joi.string().required(),
  director: joi.string().required(),
  producer: joi.string().required(),
  cover: joi.string().required(),
  releaseDate: joi.date(),
  rated: joi.number().integer().positive().min(1).max(5),
  genre: joi.string(),
  cast: joi.array().items(joi.string()),
  synopsis: joi.string()
});

const updateMovieSchema = joi.object({
  title: joi.string(),
  director: joi.string(),
  producer: joi.string(),
  cover: joi.string(),
  releaseDate: joi.date(),
  rated: joi.number().integer().positive().min(1).max(5),
  genre: joi.string(),
  cast: joi.array().items(joi.string()),
  synopsis: joi.string()
});

export default async (req, res, next) => {
  try {
    console.log(req.body);
    await createMovieSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "There was an error  while trying to validate",
      error,
    });
  }
};
