import Review from "../models/Review.js";

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    return res.json({
      msg: "Review creado",
      review: review
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear review",
      error
    })
  }
}

export {createReview}