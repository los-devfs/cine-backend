import joi from "joi";

const deleteProjectionSchema = joi.object({
    room: joi.mongoose.Schema.Types.ObjectId,
    schedule: joi.date(),
    movie: joi.mongoose.Schema.Types.ObjectId,
    mainLanguage: joi.string(),
    subtitled: joi.boolean,
    subtitlingLanguage: joi.string(),
    price: joi.number,
})
export default async(req, res, next) => {
    try {
        await deleteProjectionSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Validation error',
            error
         })
     }
 
 }